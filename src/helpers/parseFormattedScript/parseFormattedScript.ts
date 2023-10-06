
import { createContentText, getScenePages } from './index'
import { parseScriptHeading } from 'helpers'
import { IScriptImportParsed } from 'helpers/parseScriptImport'
import { createScript } from 'creators/createScript'
import { createScriptScene, IScriptScene } from 'creators/createScriptScene'
import { createBreakdown, IBreakdown } from 'creators/createBreakdown'
import { ICategory } from 'creators/createCategory'
import { createElement, IElement } from 'creators/createElement'
import { IScriptImport, IScriptSceneItem, IScriptSceneContentTextItem, IScriptSceneContent, IScriptSceneContentText } from 'types/script'

/*
PARSE CONTENT ARRAY AND RETURN { SCRIPT, SCENES, BREAKDOWNS }
SceneObjects content will be created as ProseMirror formatted documents
content array may contain other key/values and they will be ignored
sc can be null if there are no scene numbers in the script

EXPECTED FORMAT:
content = [
  { scriptElement: 'heading', textArray: [{ text: 'INT. HOUSE - DAY', marks: [{type: 'strong'}] }], sc: '1', scriptPage: '1', description: 'A description of scene one' },
  { scriptElement: 'action', textArray: [{text: 'Bob walks into', marks: null},{text: ' the room', marks: null}], sc: '1', scriptPage: '1', description: null },
  { scriptElement: 'character', textArray: [{text: 'BOB', marks: null}], sc: '1', scriptPage: '1', description: null },
  { scriptElement: 'dialogue', textArray: [{text: 'What a beautiful day.', marks: null}], sc: '1', scriptPage: '1', description: null },
  { scriptElement: 'heading', textArray: [{text: 'INT. DINER - NIGHT', marks: null}], sc: '2', scriptPage: '1', description: null },
  { scriptElement: 'action', textArray: [{text: 'Sally waits tables', marks: null},{text: ' on the night shift', marks: null}], sc: '2', scriptPage: '1', description: null },
]

MARKS TYPES:
bold = { type: 'strong' }) 
italic = { type: 'em' })
underline = { type: 'underline' })
strikeout = { type: 'strikethrough' })
element = { type: 'element', attrs: { elementId: '123' } })

SCRIPT ELEMENT TYPES:
heading 
action 
character 
parenthetical 
dialogue 
shot 
transition 

SCRIPT ELEMENT DUAL DIALOGUE TYPES:
dualDialogueLeft 
dualDialogueRight 
dualCharacterLeft 
dualCharacterRight 
dualParentheticalLeft 
dualParentheticalRight

dual dialogue content is listed sequentially, one complete side then the other, in the order character, parenthetical then dialogue:
  ...
  { scriptElement: 'dualCharacterLeft', textArray: [{text:'BOB', marks: null}], sc: '15A', scriptPage: '7', description: null },
  { scriptElement: 'dualParentheticalLeft', textArray: [{text: '(quickly)', marks: null}], sc: '15A', scriptPage: '7', description: null },
  { scriptElement: 'dualDialogueLeft', textArray: [{text: 'Good morning!', marks: null}], sc: '15A', scriptPage: '7', description: null },
  { scriptElement: 'dualCharacterRight', textArray: [{text: 'MARY', marks: null}], sc: '15A', scriptPage: '7', description: null },
  { scriptElement: 'dualParentheticalRight', textArray: [{text: '(happily)', marks: null}], sc: '15A', scriptPage: '7', description: null },
  { scriptElement: 'dualDialogueRight', textArray: [{text: 'How are you?', marks: null}], sc: '15A', scriptPage: '7', description: null },
  ...
*/

type Props = {
  currentProjectId: string;
  fileName: string;
  handleError: (e: unknown) => void;
  parsedData: IScriptImport;
}

type BuiltScene = {
  breakdown: IBreakdown;
  scene: IScriptScene;
  sceneElements: IElement[];
  updatedCategories: ICategory[];
}

const dualDialogueTypes = ['dualDialogueLeft', 'dualDialogueRight', 'dualCharacterLeft', 'dualCharacterRight', 'dualParentheticalLeft', 'dualParentheticalRight']

// PRIMARY FUNCTION
export async function parseFormattedScript({ currentProjectId, fileName, handleError, parsedData }: Props): Promise<IScriptImportParsed|undefined> {
  try {
    const { categories, categoryGroup, content, elements, moreContinued, name, pageSize, revisionName } = parsedData
    const scriptScenes: IScriptScene[] = []
    const breakdowns: IBreakdown[] = []
    const newCategories: ICategory[] = [...categories]
    const newElements: IElement[] = [...elements]

    const sceneArray: IScriptSceneItem[][]|undefined = breakContentIntoSceneArrays(content, handleError)
    if(sceneArray && sceneArray.length) {
      for(let sceneItems of sceneArray) {
        const builtScene: BuiltScene|null|undefined = buildScene(sceneItems, newCategories, newElements, handleError)
        if(builtScene) {
          scriptScenes.push(builtScene.scene)
          breakdowns.push(builtScene.breakdown)
          newElements.push(...builtScene.sceneElements)
          for(let updatedCategory of builtScene.updatedCategories) {
            const index = newCategories.findIndex(c=>c._id === updatedCategory._id)
            if(index > -1) newCategories[index] = updatedCategory
          }
        }
      }
    }
    const script = createScript({
      projectId: currentProjectId,
      categoryGroupId: categoryGroup?._id,
      name: name ?? 'Untitled Script',
      fileName,
      scenesOrdered: scriptScenes.map(s=>s?._id),
    })
    if(pageSize) script.pageSize = pageSize
    if(revisionName) script.revisionName = revisionName
    if(moreContinued) script.moreContinued = moreContinued

    return { breakdowns, categories:newCategories, categoryGroup, elements:newElements, script, scriptScenes }

  } catch(e) {
    handleError(e)
  }
}

// split array of items into an array of arrays where each child array is the content in a particular scene
function breakContentIntoSceneArrays(content: IScriptSceneItem[], handleError:(e: unknown)=>void): IScriptSceneItem[][]|undefined { // group content into scenes
  try {
    if(doesContentHaveSceneNumbers(content)) { // if has scene numbers, group by scene numbers
      let tempSceneCollection: IScriptSceneItem[] = [], currentSc: string|null|undefined = null
      return content.reduce((acc: IScriptSceneItem[][], cur: IScriptSceneItem, i: number, arr: IScriptSceneItem[])=>{
        if(cur.sc!==currentSc) { // new scene
          if(currentSc!==null) {
            acc.push(tempSceneCollection)
            tempSceneCollection = []
            currentSc = cur.sc
          } else {
            currentSc = cur.sc
          }
        }
        tempSceneCollection.push(cur) // continuing in same scene, add this line to the scene
        if(i===arr.length-1) acc.push(tempSceneCollection) // if end of content, save last scene
        return acc
      },[])
    } else { // else group by scriptElement === 'heading'
      let tempSceneCollection: IScriptSceneItem[] = [], hitFirstHeading: boolean = false
      return content.reduce((acc: IScriptSceneItem[][], cur: IScriptSceneItem, i: number, arr: IScriptSceneItem[])=>{
        if(cur.scriptElement==='heading') { // new scene
          if(hitFirstHeading) {
            acc.push(tempSceneCollection)
            tempSceneCollection = []
          } else {
            hitFirstHeading = true
          }
        }
        tempSceneCollection.push(cur) // continuing in same scene, add this line to the scene
        if(i===arr.length-1) acc.push(tempSceneCollection) // if end of content, save last scene
        return acc
      },[])
    }
  } catch(e) {
    handleError(e)
  }
}

// BUILD SCENE CONTENT INTO PROPER PROSEMIRROR CONTENT
function buildScene(sceneItems: IScriptSceneItem[], newCategories: ICategory[], newElements: IElement[], handleError:(e: unknown)=>void): BuiltScene|null|undefined {
  try {
    if(sceneItems?.length) { 
      const updatedCategories: ICategory[] = []
      const sceneElements: IElement[] = []
      const content: IScriptSceneContent[] = []
      const headingItem: IScriptSceneItem = sceneItems.find(i=>i.scriptElement==='heading') ?? sceneItems[0]
      let _ieText: string|null=null, _dnText: string|null=null, _setText: string|null=null, sc: IBreakdown['scene']=null, scriptPage: IBreakdown['scriptPage']=null, description: IBreakdown['description']=null
      let dualDialogueBlock: IScriptSceneContent|null = null
      let dualDialogueLeftBlock: IScriptSceneContent|null = null
      let dualDialogueRightBlock: IScriptSceneContent|null = null
      if(headingItem) {
        const headingText: string|null = combineTextStrings(headingItem.textArray)
        if(headingText?.length) {
          const headingValues = parseScriptHeading(headingText)
          _ieText = headingValues.ie ?? null
          _dnText = headingValues.dn ?? null
          _setText = headingValues.set ?? null
        }
        sc = headingItem?.sc ?? null
        scriptPage = headingItem?.scriptPage ?? null
        description = headingItem?.description ?? null
      }
      
      for(let item of sceneItems) {
        if(item.scriptElement && dualDialogueTypes.includes(item.scriptElement)) { // if this item is a dual dialogue type
          if(dualDialogueBlock===null) {
            dualDialogueBlock = { type: 'dualdialogue', content: [] }
            dualDialogueLeftBlock = { type: 'dualdialogueleft', content: [] }
            dualDialogueRightBlock = { type: 'dualdialogueright', content: [] }
          }
          if(item.textArray) {
            switch(item.scriptElement) {
              case 'dualCharacterLeft': 
                dualDialogueLeftBlock?.content.push(buildContentText('character', item.textArray))
                break
              case 'dualParentheticalLeft':
                dualDialogueLeftBlock?.content.push(buildContentText('parenthetical', item.textArray))
                break
              case 'dualDialogueLeft':
                dualDialogueLeftBlock?.content.push(buildContentText('dialogue', item.textArray))
                break
              case 'dualCharacterRight': 
                dualDialogueRightBlock?.content.push(buildContentText('character', item.textArray))
                break
              case 'dualParentheticalRight':
                dualDialogueRightBlock?.content.push(buildContentText('parenthetical', item.textArray))
                break
              case 'dualDialogueRight':
                dualDialogueRightBlock?.content.push(buildContentText('dialogue', item.textArray))
                break
              default:
            }
          }
          
        } else { // this item is not dual dialogue
          if(dualDialogueBlock!==null) { // if we previously created a dual dialogue block, save that, then continue with this item
            content.push({...dualDialogueBlock, content: [dualDialogueLeftBlock, dualDialogueRightBlock]})
            dualDialogueBlock = null
            dualDialogueLeftBlock = null
            dualDialogueRightBlock = null
          }
          if(item.textArray && item.scriptElement) {
            const sceneContent: IScriptSceneContent = buildContentBlock(item.scriptElement, item.textArray)
            content.push(sceneContent)
          }
        }
      }
      const pages: number|null = getScenePages(content, handleError) ?? null

      const scene: IScriptScene = createScriptScene({
        content: JSON.stringify(content),
      })

      // add ie, dn, set elements to sceneElements
      type Value = { name: 'ie'|'dn'|'set'; text: string|null; _id: string|null; }
      const values: Value[] = [
        {name: 'ie', text: _ieText, _id: null}, 
        {name: 'dn', text: _dnText, _id: null}, 
        {name: 'set', text: _setText, _id: null}
      ]
      // iterate through values, add _ids to values array
      values.forEach((valueObj, i)=>{
        if(valueObj.text===null) return
        const newElement: IElement|undefined = newElements.find(e=>e.name===valueObj.text)
        if(newElement) { // if element exists, use that
          values[i]._id = newElement._id
        } else { // else create new element
          const element: IElement = createElement({ name: valueObj.text })
          sceneElements.push(element)
          values[i]._id = element._id 
          // update category
          const index = newCategories.findIndex(c=>c.breakdownField===valueObj.name)
          if(!newCategories[index].elementsOrdered.includes(element._id)) {
            const updatedCategory = {...newCategories[index], elementsOrdered: [...newCategories[index].elementsOrdered, element._id]}
            updatedCategories.push(updatedCategory)
          }
        }
      })
      // convert values array to object { ie: 'ABC123', dn: 'ABC124', set: 'ABC125' }
      const breakdownIeDnSet = values.map(v=>({[v.name]: v._id})).reduce((acc, cur)=>({...acc, ...cur}), {})

      const breakdown = createBreakdown({
        ...breakdownIeDnSet,
        scene: sc, 
        scriptPage, 
        description, 
        pages,
        elementIds: getSceneElementIds(content),
      })
      
      return { breakdown, scene, sceneElements, updatedCategories } 
    }
    return null
  } catch(e) {
    handleError(e)
  }
}

function getSceneElementIds(content: IScriptSceneContent[]): string[] {
  const elementIds: string[] = []
  for(let t=0;t<content?.length;t++) { // loop through text
    const contentLines = content[t]?.content
    if(contentLines?.length) {
      for(let l=0;l<contentLines.length;l++) {
        if(contentLines[l]?.marks?.length) {
          for(let m=0;m<contentLines[l]?.marks.length;m++) {
            const mark = contentLines[l]?.marks[m]
            if(mark.type==='element') {
              elementIds.push(mark.attrs['elem-id'])
            }
          }
        }
      }
    }
  }
  return elementIds
}

function buildContentBlock(type: string, textArray: IScriptSceneContentTextItem[]): IScriptSceneContent {
  const content: IScriptSceneContentText[] = buildContentText(type, textArray) ?? []
  return { type, content }
}

function buildContentText(type: string, textArray: IScriptSceneContentTextItem[]): IScriptSceneContentText[] {
  let content: IScriptSceneContentText[] = []
  for(let t=0;t<textArray?.length;t++) { // loop through text
    const text = conditionText(type, textArray[t]?.text)
    const marks = textArray[t]?.marks
    if(text) {
      const contentText = createContentText(text, marks)
      if(contentText) content.push(contentText)
    }
  }
  return content
}

// HELPER FUNCTIONS
function doesContentHaveSceneNumbers(content: IScriptSceneItem[]): boolean {
  return content[0]?.sc !== null || content[content.length-1]?.sc !== null
}

function conditionText(type: string, string: string) {
  const cleanText = cleanEntities(string)
  switch(type) {
    case 'parenthetical': return cleanText?.replace(/([()])/g,'') // remove parentheses
    default: return cleanText
  }
}

function cleanEntities(string: string) {
  return string.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
}

function combineTextStrings(textArray?: IScriptSceneContentTextItem[]) {
  return textArray?.map(t=>t.text)?.join('') ?? null
}