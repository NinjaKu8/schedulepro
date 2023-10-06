import _ from 'lodash'

import { InitialCategory, initialCategories } from 'globals/initialCategories'
import { getXMLFromBlob, isBlob, isTruthy, createObjectId } from 'helpers'
import { createCategory, createElement, createInitialCategoriesAndElements } from 'creators'
import { ICategory } from 'creators/createCategory'
import { IElement } from 'creators/createElement'
import { ScriptMoreContinued } from 'creators/createScript'
import { ScriptSceneNumber, ScriptPageNumber, IScriptSceneContentTextItem, IScriptSceneItem, IScriptImport, IMark } from 'types/script'
import { ICategoryGroup } from 'creators/createCategoryGroup'

type Revision = {
  id: string;
  name: string;
  mark: string;
}

// PRIMARY FUNCTION
export async function parseFDX(file: File, handleError:(e: unknown)=>void): Promise<IScriptImport | null | undefined> {
  try {
    if(!isBlob(file)) return null
    const xmlDoc = await getXMLFromBlob(file)
    if(!xmlDoc) {
      throw new Error('You tried to upload something other than a Final Draft file. Try uploading a different file')
    }

    // is the uploaded file a Final Draft XML document?
    const xmlFinalDraftNodes = xmlDoc?.getElementsByTagName('FinalDraft') ?? null
    if(!xmlFinalDraftNodes || !xmlFinalDraftNodes?.length) {
      throw new Error('You tried to upload something other than a Final Draft file. Try uploading a different file')
    }
    if(xmlFinalDraftNodes[0].getAttribute('DocumentType')!=='Script') {
      throw new Error('This Final Draft file does not contain any script data')
    }

    // populate basic info
    const name = getName(xmlDoc) ?? 'Untitled'
    const pageSize = getPageSize(xmlDoc)
    const moreContinued = getMoreContinued(xmlDoc)

    // get revisions
    let revisionName: string|null = null
    let revisionNames: Revision[]|null = null
    const revisionObject = getRevisions(xmlDoc)
    if(revisionObject) {
      revisionName = revisionObject.revisionName
      revisionNames = revisionObject.revisionNames
    }

    // lookups
    const fdTagCategories: {[key:string]: string|undefined} = {} // { tagId: categoryId }
    const fdTagElements: {[key:string]: string|undefined} = {} // { tagNumber: elementId }

    // get categories & elements, if the FDX file was tagged
    const { initialCategoryGroupObject, initialCategoryObjects, initialElementObjects } = createInitialCategoriesAndElements()
    const rawCategoryObjects: ICategory[]|null|undefined = updateCategories(xmlDoc, initialCategoryObjects)
    if(!rawCategoryObjects) return null
    const objects: {categoryObjects: ICategory[], elementObjects: IElement[]}|null|undefined = updateElements(xmlDoc, rawCategoryObjects, initialElementObjects)
    const categoryGroup: ICategoryGroup = initialCategoryGroupObject
    const categories: ICategory[] = objects?.categoryObjects ?? initialCategoryObjects
    const elements: IElement[] = objects?.elementObjects ?? initialElementObjects

    // get scenes
    const content = parseScenes(xmlDoc, objects?.elementObjects)
    if(content) {
      return { name, content, pageSize, revisionName, moreContinued, categoryGroup, categories, elements }
    } else {
      return null
    }

    // GET CATEGORIES & ELEMENTS

    function updateCategories(xmlDoc: XMLDocument, initialCategoryObjects: ICategory[]): ICategory[]|null|undefined { // build categories based on TagCategories
      try {
        if(xmlDoc) {
          // if script is tagged, setup categories and elements
          const xmlTagDefinitions: HTMLCollection = xmlDoc?.getElementsByTagName('TagDefinition')
          const xmlTags: HTMLCollection = xmlDoc?.getElementsByTagName('Tag')
          const xmlTagCategories: HTMLCollection = xmlDoc?.getElementsByTagName('TagCategory')
          if(xmlTagDefinitions?.length && xmlTags?.length) {
            const removableCategories: InitialCategory[] = initialCategories?.filter(c=>c.ussId>=100) ?? []
            if(removableCategories?.length) {
              const tagCategories: ICategory[] = [...initialCategoryObjects]
              for(let t=0;t<xmlTagCategories?.length;t++) {
                const xmlTagCategory = xmlTagCategories[t]
                const _tagCatId = xmlTagCategory?.getAttribute('Id')
                const _tagCatName = xmlTagCategory?.getAttribute('Name')
                const _tagCatNumber = xmlTagCategory?.getAttribute('Number')
                if(_tagCatId && _tagCatName) {
                  const removableCategory = removableCategories.find(c=>c.finalDraftTagNumber===_tagCatNumber)
                  if(removableCategory) { // create new category and add _tagCatId
                    const index: number = tagCategories.findIndex(c=>c.ussId===removableCategory.ussId)
                    if(!index) continue
                    const matchingCategory = tagCategories[index]
                    fdTagCategories[_tagCatId] = matchingCategory._id
                  } else { // create new category with 'other' flavor
                    const newCategory: ICategory = createCategory({ ussId: 124, name: _tagCatName })
                    if(newCategory) {
                      fdTagCategories[_tagCatId] = newCategory._id
                      tagCategories.push(newCategory)
                    }
                  }
                }
              }
              return tagCategories
            }
          }
        }
        return initialCategoryObjects
      } catch(e) {
        handleError(e)
      }
    }

    function updateElements(xmlDoc: XMLDocument, rawCategoryObjects: ICategory[], initialElementObjects: IElement[]): {categoryObjects: ICategory[]; elementObjects: IElement[];} | null | undefined { // build elements based on TagDefinitions & Tags, update categories with their elements
      try{
        if(xmlDoc && rawCategoryObjects?.length) {
          const categoryObjects: ICategory[] = [...rawCategoryObjects]
          const elementObjects: IElement[] = [...initialElementObjects]
          const xmlTagDefinitions = xmlDoc?.getElementsByTagName('TagDefinition') // TagDefinition are the elements. Id is the DefId
          const xmlTags = xmlDoc?.getElementsByTagName('Tag') // Tag elements are the actual tags applied to the script, contain DefId child
          const xmlDefIds = xmlDoc?.getElementsByTagName('DefId')
          if(xmlTagDefinitions?.length && xmlTags?.length && xmlDefIds?.length) {
            for(let e=0;e<xmlTagDefinitions.length;e++) { // loop through elements
              const xmlTagDefinition = xmlTagDefinitions[e] // element
              let element: IElement|null = null
              const tagElemCatId = xmlTagDefinition?.getAttribute('CatId')
              const tagElemId = xmlTagDefinition?.getAttribute('Id')
              const tagElemName = xmlTagDefinition?.getAttribute('Label')
              if(tagElemId && tagElemName && tagElemCatId) { // if the element is tagged
                const categoryId = fdTagCategories[tagElemCatId]
                if(categoryId) {
                  const fdTagElement = fdTagElements[tagElemId]
                  if(fdTagElement) { // if element already exists, update it
                    element = elementObjects.find(e=>e._id===fdTagElement) ?? null
                  } else { // if element doesn't exist, create it
                    element = createElement({ name: tagElemName })
                    const defIdNumber: string|null|undefined = getTagDefIdNumberByTagElemId(xmlDoc, tagElemId)
                    if(defIdNumber) fdTagElements[defIdNumber] = element?._id
                  }
                  if(element) {
                    const index = categoryObjects.findIndex(c=>c._id===categoryId) // find index of this element's category
                    if(index>=0 && element._id) categoryObjects[index]?.elementsOrdered?.push(element._id) // push this element._id to category.elements
                  }
                }
              }
              if(element) elementObjects.push(element)
            }
            return { categoryObjects, elementObjects }
          }
        }
        return { categoryObjects: rawCategoryObjects, elementObjects: initialElementObjects }
      } catch(e) {
        handleError(e)
      }
    }

    function getTagDefIdNumberByTagElemId(xmlDoc: XMLDocument, tagElemId: string) {
      try {
        const xmlTags = xmlDoc?.getElementsByTagName('Tag') // Tag elements are the actual tags applied to the script, contain DefId child
        for(let t=0;t<xmlTags.length;t++) { // loop through tags
          const xmlTag = xmlTags[t]
          const tagDefId = xmlTag?.getElementsByTagName('DefId')
          if(tagDefId?.length && tagDefId[0]?.textContent===tagElemId) {
            const tagNumber = xmlTag?.getAttribute('Number')
            if(tagNumber) return tagNumber
          }
        }
      return null
      } catch(e) {
        handleError(e)
      }
    }

    function getTagDefinitionByTagNumber(xmlTagData: HTMLCollection, tagNumber: string): Element|null|undefined {
      try {
        if(xmlTagData && tagNumber?.length) {
          const xmlTagsParent = xmlTagData[0]?.getElementsByTagName('Tags')
          if(xmlTagsParent?.length) {
            let matchingXmlDefId
            const xmlTags = xmlTagsParent[0]?.getElementsByTagName('Tag')
            if(xmlTags?.length) {
              for(let t=0;t<xmlTags.length;t++) {
                const xmlTag = xmlTags[t]
                const tagAttributeNumber = xmlTag?.getAttribute('Number')
                if(tagAttributeNumber===tagNumber) {
                  const xmlTagDefs = xmlTag?.getElementsByTagName('DefId')
                  if(xmlTagDefs.length) {
                    matchingXmlDefId = xmlTagDefs[0]
                    break
                  }
                }
              }
            }
            
            if(matchingXmlDefId) {
              const hex = matchingXmlDefId.innerHTML
              const xmlTagDefinitions = xmlTagData[0]?.getElementsByTagName('TagDefinition')
              if(xmlTagDefinitions?.length) {
                for(let d=0;d<xmlTagDefinitions.length;d++) {
                  const xmlTagDefinition = xmlTagDefinitions[d]
                  const xmlTagDefinitionId = xmlTagDefinition.getAttribute('Id')
                  if(xmlTagDefinitionId===hex) {
                    return xmlTagDefinition
                  }
                }
              }
            }
          }
        }
        return null
      } catch(e) {
        handleError(e)
      }
    }

    // ITERATE SCENES, BUILD CONTENT
    function parseScenes(xmlDoc: XMLDocument, elementObjects: IElement[]|null|undefined): IScriptSceneItem[]|undefined { // build scenes from Paragraphs
      try {
        let content: IScriptSceneItem[] = []
        if(xmlDoc) {
          // convert Paragraphs into an array
          const xmlParagraphs: Element[] = Array.prototype.slice.call(xmlDoc?.getElementsByTagName('Paragraph'))
          if(_.isArray(xmlParagraphs) && xmlParagraphs.length) {
            // group Paragraphs into scenes
            const xmlParagraphGroups = divideParagraphsIntoGroups(xmlParagraphs)

            if(xmlParagraphGroups?.length) {
              // let previousDn = ''
              for(let s=0;s<xmlParagraphGroups.length;s++) { // iterate through scenes
                const xmlParagraphGroup = xmlParagraphGroups[s] // scene
                if(xmlParagraphGroup) {
                  const xmlTagData: HTMLCollection = xmlDoc?.getElementsByTagName('TagData') ?? null
                  const sceneContent: IScriptSceneItem[]|null|undefined = getItemsFromScene(xmlParagraphGroup, elementObjects, xmlTagData)
                  if(sceneContent) {
                  //   if(sceneContent?.dn==='CONTINUOUS' && previousDn?.length) sceneContent.dn = previousDn // change continuous to day, night, etc
                  //   previousDn = sceneContent?.dn ?? ''
                    const scriptSceneId = createObjectId()
                    const sceneContentWithId = sceneContent.map(s=>({...s, scriptSceneId})) 
                    content.push(...sceneContentWithId)
                  }
                }
              }
            }
          }
        }
        return content
      } catch(e) {
        handleError(e)
      }
    }

    function getItemsFromScene(xmlParagraphGroup: Element[]=[], elementObjects: IElement[]|null|undefined, xmlTagData: HTMLCollection) {
      try {
        // iterate through each Paragraph in this scene
        if(xmlParagraphGroup && xmlParagraphGroup?.length) {
          const itemArray: IScriptSceneItem[] = []
          let sc: ScriptSceneNumber = null, scriptPage: ScriptPageNumber = '1'

          for(let p=0;p<xmlParagraphGroup.length;p++) { // loop through paragraphs
            let item: IScriptSceneItem = { scriptElement: null, textArray: [], description: null }
            const xmlParagraph = xmlParagraphGroup[p]
            const blockType = getBlockType(xmlParagraph)

            if(blockType) {
              item.scriptElement = blockType
              // remove ScriptNote & OmittedScenes, leaving just the text
              const xmlScriptNotes = xmlParagraph?.getElementsByTagName('ScriptNote')
              if(xmlScriptNotes && xmlScriptNotes?.length) {
                while(xmlScriptNotes.length) {
                  xmlParagraph?.removeChild(xmlScriptNotes[0])
                }
              } 
              const xmlOmitteds = xmlParagraph?.getElementsByTagName('OmittedScene')
              if(xmlOmitteds && xmlOmitteds?.length) {
                while(xmlOmitteds.length) {
                  xmlParagraph?.removeChild(xmlOmitteds[0])
                }
              } 

              // if Heading
              if(blockType==='heading') { // if paragraph block is a heading, do heading related tasks
                sc = sceneNumber(xmlParagraph)
                item.description = sceneDescription(xmlParagraph, xmlTagData)

                const xmlSceneHeading: HTMLCollectionOf<Element> = xmlParagraph?.getElementsByTagName('SceneProperties')
                scriptPage = sceneScriptPage(xmlSceneHeading)
                // remove SceneProperties, leaving just the text
                const xmlSceneProperties = xmlParagraph?.getElementsByTagName('SceneProperties')
                if(xmlSceneProperties && xmlSceneProperties?.length) {
                  while(xmlSceneProperties.length) {
                    xmlParagraph?.removeChild(xmlSceneProperties[0])
                  }
                } 
              }
              // if Dual Dialogue
              const xmlDualDialogue = xmlParagraph?.getElementsByTagName('DualDialogue')
              if(xmlDualDialogue.length) {
                const xmlDualDialogueParagraphs: HTMLCollection = xmlDualDialogue[0]?.getElementsByTagName('Paragraph')
                const dualDialogueItems: IScriptSceneItem[]|undefined = buildDualDialogueTextItems(xmlDualDialogueParagraphs, elementObjects, sc, scriptPage)
                if(dualDialogueItems?.length) itemArray.push(...dualDialogueItems)
                continue
              }
              // if regular Paragraph, not Dual Dialogue
              if(xmlParagraph.parentNode?.nodeName!=='DualDialogue') { 
                const xmlTexts = xmlParagraph?.getElementsByTagName('Text')
                const textItems = buildTextItems(xmlTexts, elementObjects)
                if(textItems?.length) item.textArray?.push(...textItems)
              }
            }
            if(item?.scriptElement && item?.textArray?.length) itemArray.push({ ...item, sc, scriptPage })
          }
          
          // do not return a scene that only has 'Fade In'
          // if(scene.textArray.length<2) {
          //   if(scene.textArray[0]?.text?.toLowerCase()?.includes('fade')) {
          //     return null
          //   }
          // }
          return itemArray
        } else {
          return null
        }
      } catch(e) {
        handleError(e)
      }
    }

    function buildDualDialogueTextItems(xmlDualDialogueParagraphs: HTMLCollection|never[]=[], elementObjects: IElement[]|null|undefined, sc: string|null|undefined, scriptPage: string|null|undefined) { // build content for dual dialogue paragraphs
      try {
        const dualDialogueItems: IScriptSceneItem[] = []
        for(let p=0;p<xmlDualDialogueParagraphs.length;p++) { // loop through paragraphs
          let item: IScriptSceneItem = { scriptElement: null, textArray: [], description: null, sc, scriptPage }
          const xmlDualDialogueParagraph = xmlDualDialogueParagraphs[p]
          const blockType = getBlockType(xmlDualDialogueParagraph)
          if(blockType) {
            
            switch(blockType) {
              case 'character':
                if(dualDialogueItems.find(i=>i.scriptElement==='dualCharacterLeft')) {
                  item.scriptElement = 'dualCharacterRight'
                } else {
                  item.scriptElement = 'dualCharacterLeft'
                }
                break
              case 'parenthetical':
                if(dualDialogueItems.find(i=>i.scriptElement==='dualParentheticalLeft')) {
                  item.scriptElement = 'dualParentheticalRight'
                } else {
                  item.scriptElement = 'dualParentheticalLeft'
                }
                break
              case 'dialogue':
                if(dualDialogueItems.find(i=>i.scriptElement==='dualDialogueLeft')) {
                  item.scriptElement = 'dualDialogueRight'
                } else {
                  item.scriptElement = 'dualDialogueLeft'
                }
                break
              default:
            }

            const xmlTexts: HTMLCollectionOf<Element> = xmlDualDialogueParagraph?.getElementsByTagName('Text')
            item.textArray = buildTextItems(xmlTexts, elementObjects)
            if(item.scriptElement) dualDialogueItems.push(item)
          }
        }
        return dualDialogueItems
      } catch(e) {
        handleError(e)
      }
    }

    function buildTextItems(xmlTexts: any=[], elementObjects: IElement[]|null|undefined) {
      try {
        let textItems: IScriptSceneContentTextItem[] = []
        if(xmlTexts) {
          for(let t=0;t<xmlTexts?.length;t++) { // loop through text
            const xmlText = xmlTexts[t]
            const marks: IMark[] = []
            if(!xmlText?.innerHTML?.length) continue // eliminate no-content text strings from other scene heading related nodes
      
            // styles
            const textStyles = xmlText?.getAttribute('Style') ?? []
            const styleMarks = getStyleMarks(textStyles)
            if(styleMarks?.length) marks.push(...styleMarks)
      
            // revisions
            const revisionId = xmlText?.getAttribute('RevisionID')
            if(revisionId) {
              const revision = revisionNames?.find(r=>r.id===revisionId)
              if(revision) marks.push({ type: 'revision', revision: revision.name })
            }

            // tags
            const textTag = xmlText?.getAttribute('TagNumber') ?? []
            if(textTag?.length) { 
              const elementId = fdTagElements[textTag]
              const element = elementObjects?.find(e=>e._id===elementId)
              const elementMark = getElementMark(elementId, element?.name)
              if(elementMark) marks.push(elementMark)
            } 

            const text = xmlText?.innerHTML
            if(text) textItems.push({ text, marks })
          }
        }    
        return textItems
      } catch(e) {
        handleError(e)
      }
    }

    function cleanEntities(text: string) {
      return text.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
    }

    function getBlockType(xmlParagraph: Element | null) {
      try {
        if(xmlParagraph) {
          const paragraphType = xmlParagraph?.getAttribute('Type')
          if(_.isString(paragraphType) && paragraphType.length) {
            switch(paragraphType) {
              case 'Scene Heading': return 'heading'
              case 'Action': return 'action'
              case 'Character': return 'character'
              case 'Parenthetical': return 'parenthetical'
              case 'Dialogue': return 'dialogue'
              case 'Shot': return 'shot'
              case 'Transition': return 'transition'
              default: return 'general'
            }
          } else {
            return null
          }
        } else {
          return null
        }
      } catch(e) {
        handleError(e)
      }
    }

    function getStyleMarks(styles: string|never[]) {
      try {
        if(styles && _.isString(styles) && styles.length) {
          const styleArray: string[] = styles?.split('+')
          if(!styleArray) return null
          let marks: IMark[] = []
          for(let s=0;s<styleArray.length;s++) {
            if(styleArray[s]==='Bold') marks.push({ "type": 'strong' }) 
            if(styleArray[s]==='Italic') marks.push({ "type": 'em' })
            if(styleArray[s].includes('Underline')) marks.push({ "type": 'underline' })
            if(styleArray[s]==='Strikeout') marks.push({ "type": 'strikethrough' })
          }
          return marks
        } else {
          return null
        }
      } catch(e) {
        handleError(e)
      }
    }

    function getElementMark(elementId: string|undefined, name: string|undefined) {
      try {
        return elementId && name ? { "type": "element", "attrs": { "elem-id": elementId, "elem-name": name } } : null
      } catch(e) {
        handleError(e)
      }
    }

    function divideParagraphsIntoGroups(xmlParagraphs: Element[]=[]) {
      try {
        let xmlParagraphGroups: Element[][] = [], xmlCurrentGroup: Element[] = [], hasEncounteredFirstSceneHeading = false
        if(xmlParagraphs?.length) {
          for(let x=0;x<xmlParagraphs.length;x++) {
            const xmlParagraph = xmlParagraphs[x]
            const isSceneHeading = xmlParagraph?.getAttribute('Type')==='Scene Heading'
            if(isSceneHeading) {
              if(!hasEncounteredFirstSceneHeading) { // skip pushing xmlCurrentGroup to xmlParagraphGroup for first scene, as it would be empty
                hasEncounteredFirstSceneHeading = true
              } else {
                xmlParagraphGroups.push(xmlCurrentGroup)
                xmlCurrentGroup = []
              }
            }
            xmlCurrentGroup.push(xmlParagraph)
          }
          xmlParagraphGroups.push(xmlCurrentGroup) // push what's left in final scene
        } 
        return xmlParagraphGroups
      } catch(e) {
        handleError(e)
      }
    }


    // HELPERS THAT CLEAN XML DATA

    function getName(xmlDoc: XMLDocument) { // attempt to get first line from title page as script name
      try {
        const xmlTitlePage = xmlDoc?.getElementsByTagName('TitlePage')
        if(xmlTitlePage) {
          const xmlTitlePageContent = xmlTitlePage[0]?.getElementsByTagName('Content')
          if(xmlTitlePageContent) {
            const xmlTitlePageContentTexts = xmlTitlePageContent[0]?.getElementsByTagName('Text')
            if(xmlTitlePageContentTexts) {
              for(let t=0;t<xmlTitlePageContentTexts?.length;t++) {
                const xmlText = xmlTitlePageContentTexts[t]
                if(xmlText && xmlText?.innerHTML?.length) {
                  const name = cleanEntities(xmlText?.innerHTML)?.trim() ?? 'Untitled'
                  return name.length ? name : 'Untitled'
                }
              }
            }
          }
        } 
        return null
      } catch(e) {
        handleError(e)
      }
    }

    function getPageSize(xmlDoc: XMLDocument | null) {
      try {
        if(xmlDoc) {
          let newPageSize = 'letter'
          const xmlDocPageSizes = xmlDoc?.getElementsByTagName('PageSize')
          if(xmlDocPageSizes?.length) {
            const xmlDocPageSize = xmlDocPageSizes[0]
            const height = Number(xmlDocPageSize?.getAttribute('Height'))
            const width = Number(xmlDocPageSize?.getAttribute('Width'))
            if(!isNaN(height) && !isNaN(width)) {
              // if((width===8.5 && height===11) || (width===11 && height===8.5)) newPageSize = 'letter' // var newPageSize default val is letter
              if((width===8.26 && height===11.69) || (width===11.69 && height===8.26)) newPageSize = 'a4'
            }
          }
          return newPageSize
        } else {
          return null
        }
      } catch(e) {
        handleError(e)
      }
    }

    function getRevisions(xmlDoc: XMLDocument | null) {
      try {
        if(xmlDoc) {
          let revisionName: string|null = null
          const revisionNames: Revision[] = []
          const xmlDocRevisionsParent = xmlDoc?.getElementsByTagName('Revisions')
          if(xmlDocRevisionsParent?.length) {
            const xmlDocRevisionParent = xmlDocRevisionsParent[0]
            const xmlDocRevisionParentActiveSet = xmlDocRevisionParent?.getAttribute('ActiveSet')
            if(xmlDocRevisionParentActiveSet?.length) {
              const xmlDocRevisions = xmlDocRevisionsParent[0]?.getElementsByTagName('Revision')
              if(xmlDocRevisions?.length) {
                for(let r=0;r<xmlDocRevisions?.length;r++) {
                  const xmlDocRevision = xmlDocRevisions[r]
                  const xmlDocRevisionId = xmlDocRevision?.getAttribute('ID')
                  const xmlDocRevisionMark = xmlDocRevision?.getAttribute('Mark')
                  const xmlDocRevisionName = xmlDocRevision?.getAttribute('Name')
                  if(xmlDocRevisionId===xmlDocRevisionParentActiveSet) {
                    if(xmlDocRevisionName?.length) revisionName = xmlDocRevisionName
                  }
                  if(!xmlDocRevisionId?.length || !xmlDocRevisionMark?.length || !xmlDocRevisionName?.length) continue
                  revisionNames.push({ id: xmlDocRevisionId, mark: xmlDocRevisionMark, name: xmlDocRevisionName })
                }
                return { revisionName, revisionNames }
              }
            }
          }
          return null
        } else {
          return null
        }
      } catch(e) {
        handleError(e)
      }
    }

    function getMoreContinued(xmlDoc: XMLDocument | null) {
      try {
        if(xmlDoc) {
          let obj: ScriptMoreContinued = {}
          const dialogueBreaks: HTMLCollection = xmlDoc?.getElementsByTagName('DialogueBreaks')
          if(dialogueBreaks?.length) {
            const dialogueBreak: Element = dialogueBreaks[0]
            obj.dialogueBottom = {
              text: dialogueBreak?.getAttribute('DialogueBottom'),
              visible: isTruthy(dialogueBreak?.getAttribute('AutomaticCharacterContinueds')),
            }
            obj.dialogueTop = {
              text: dialogueBreak?.getAttribute('DialogueTop'),
              visible: isTruthy(dialogueBreak?.getAttribute('AutomaticCharacterContinueds')),
            }
          }
          const sceneBreaks: HTMLCollection = xmlDoc?.getElementsByTagName('SceneBreaks')
          if(sceneBreaks?.length) {
            const sceneBreak: Element = sceneBreaks[0]
            obj.sceneBottom = {
              text: sceneBreak?.getAttribute('SceneBottom'),
              visible: isTruthy(sceneBreak?.getAttribute('SceneBottomOfPage')),
            }
            obj.sceneTop = {
              text: sceneBreak?.getAttribute('SceneTop'),
              visible: isTruthy(sceneBreak?.getAttribute('SceneTopOfNext')),
              sceneVisible: isTruthy(sceneBreak?.getAttribute('ContinuedNumber')),
            }
          }
          return obj
        } else {
          return null
        }
      } catch(e) {
        handleError(e)
      }
    }

    function sceneDescription(xmlParagraph: Element | null, xmlTagData: HTMLCollection) {
      try {
        if(xmlParagraph && xmlTagData) {
          const xmlTexts = xmlParagraph?.getElementsByTagName('Text')
          if(xmlTexts?.length) {
            for(let t=0;t<xmlTexts.length;t++) {
              const xmlText = xmlTexts[t]
              const tagNumber = xmlText?.getAttribute('TagNumber')
              if(tagNumber?.length) {
                const xmlTagDefinition = getTagDefinitionByTagNumber(xmlTagData, tagNumber)
                if(xmlTagDefinition) {
                  const description = xmlTagDefinition?.getAttribute('Label')
                  if(description?.length) return cleanEntities(description)
                }
              }
            }
          }
          return null
        } else {
          return null
        }
      } catch(e) {
        handleError(e)
      }
    }

    function sceneNumber(xmlParagraph: Element | null) {
      try {
        if(xmlParagraph) {
          const sceneNumber = xmlParagraph?.getAttribute('Number')
          return sceneNumber ?? null
        } else {
          return null
        }
      } catch(e) {
        handleError(e)
      }
    }

    function sceneScriptPage(xmlSceneHeading: HTMLCollection|never[]=[]) {
      try {
        if(xmlSceneHeading?.length) {
          const xmlSceneHead = xmlSceneHeading[0]
          const page = xmlSceneHead?.getAttribute('Page')
          return page ?? null
        } else {
          return null
        }
      } catch(e) {
        handleError(e)
      }
    }

  } catch(e) {
    handleError(e)
  }
}

