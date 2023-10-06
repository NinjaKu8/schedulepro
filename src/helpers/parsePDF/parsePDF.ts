import _ from 'lodash'
import * as pdfjs from 'pdfjs-dist/build/pdf'
import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist/types/src/display/api'

import PdfMargins from './PdfMargins.class'
import { Margin, MarginContent } from './PdfMargins.class'
import { createInitialCategoriesAndElements } from 'creators'
import { IScriptSceneContentTextItem, IScriptSceneContentTextElement, IScriptSceneInfo, IScriptImport } from 'types/script'
import { ICoordinates } from 'types/types'

const colors: string[] = ['white','blue','pink','yellow','green','goldenrod','buff','salmon','cherry','tan']
const ignore: string[] = ['(CONTINUED)','(MORE)','(CONT\'D)','(CONT’D)','CONTINUED:','(cont\'d)','(cont’d)', '']
const topMarginLimit: number = 650 // position below which it's likely a page is a title page and contains no content
const pageHeaderLimit: number = 725 // position above which content is likely to be a page header
const pageNumberLimit: number = 740 // position above which content is likely to be a page number

// PRIMARY FUNCTION
export async function parsePDF(file: File, handleError:(e: unknown)=>void): Promise<IScriptImport | null | undefined> {
  try {
    const pdfFile = await file.arrayBuffer() // pdfjsLib expects an TypedArray or url
    pdfjs.GlobalWorkerOptions.workerSrc = '/assets/js/pdf.worker.min.js' // package.json scripts copies this file to public/assets/js on start
    const loadingTask = pdfjs.getDocument(pdfFile)

    // pdfjsLib returns a promise
    const pdf: PDFDocumentProxy = await loadingTask.promise.then(async (pdf: PDFDocumentProxy)=>pdf)
    const sortedContent: IScriptSceneContentTextElement[]|undefined = await getScriptContentWithDimensions(pdf)

    // if we have sortedContent, parse that content
    if(checkScriptContentWithDimensions(sortedContent)) {
      const pageSize = sortedContent ? getPageSize(sortedContent[0]?.pageDimensions) : null
      const name = getScriptName(sortedContent)
      const justScriptContentWithDimensions: IScriptSceneContentTextElement[]|undefined = removeTitlePageContent(sortedContent)
      const { initialCategoryGroupObject, initialCategoryObjects, initialElementObjects } = createInitialCategoriesAndElements()
      const content: IScriptSceneInfo[] = parseContentAndTag(justScriptContentWithDimensions)
      checkContentFormatting(content)

      return { name, content, pageSize, categoryGroup: initialCategoryGroupObject, categories: initialCategoryObjects, elements: initialElementObjects }
    } else {
      return null
    }

    // get text content from pdf, sort
    async function getScriptContentWithDimensions(pdf: PDFDocumentProxy) { 
      try {
        const rawContent: IScriptSceneContentTextElement[] = []
        const totalPageCount: number = pdf._pdfInfo.numPages
        for(let p=1;p<=totalPageCount;p++) { // iterate through all pages in document
          const page: PDFPageProxy = await pdf.getPage(p)
          const pageCount = p
          const pageDimensions: {x: number, y: number} = {x: page._pageInfo.view[2], y: page._pageInfo.view[3]}
          const textContext: any = await page.getTextContent() // get text content for this page, is 'any' because https://github.com/WorldBrain/pdfjs-dist/issues/1
          rawContent.push(...textContext.items
            .filter((i: any) =>!ignore.includes(i?.str) && parseInt(i?.height)!==0 && !isItemPageHeader({x: parseInt(i?.transform[4]), y:parseInt(i?.transform[5]), str: i.str})) // exclude noise
            .map((i: any) =>({
              pageCount,
              pageDimensions,
              x: parseInt(i?.transform[4]), 
              y: parseInt(i?.transform[5]), 
              w: parseInt(i?.width), 
              h: parseInt(i?.height),
              str: cleanIgnoredItems(i?.str, ignore) // remove items from ignore list from inline string
            }))
          )
        }
        return _.orderBy(rawContent, ['pageCount', 'y', 'x'],['asc','desc','asc']) // sort content for top-to-bottom processing
      } catch(e){
        handleError(e)
      }
    }

    // iterate through scriptContent, parse strings and tag with proper scriptElement
    function parseContentAndTag(scriptContent: IScriptSceneContentTextElement[]|undefined) {
      const margins: Margin = new PdfMargins()
      const parsedContent: IScriptSceneInfo[] = []
      if(!scriptContent) return parsedContent
      let combinedItem: IScriptSceneInfo|null = null,
          dualCharacterLeftItem: IScriptSceneInfo|null = null,
          dualCharacterRightItem: IScriptSceneInfo|null = null,
          dualDialogueLeftItem: IScriptSceneInfo|null = null,
          dualDialogueRightItem: IScriptSceneInfo|null = null,
          dualParentheticalLeftItem: IScriptSceneInfo|null = null,
          dualParentheticalRightItem: IScriptSceneInfo|null = null,
          isDualDialogueMode: boolean = false,
          sc: string|null = null, 
          scriptPage: string = '1',
          isRevision: boolean = false

      for(let c=0;c<scriptContent.length;c++) { // loop through each line of text content
        const item: IScriptSceneContentTextElement = scriptContent[c]
        const prevItem: IScriptSceneContentTextElement|null = c > 0 ? scriptContent[c-1] : null // get previous item before this item
        const nextItem: IScriptSceneContentTextElement|null = c < scriptContent.length-1 ? scriptContent[c+1] : null // get next item after this item

        // helper variables
        const prevItemIsSameColumn = item.x===prevItem?.x
        const prevItemOnSameLine = item.y===prevItem?.y
        const prevItemHasParagraphBreak = Boolean(prevItem?.y && item.h>0 && item.y + item.h < prevItem?.y)
        const nextItemIsSameColumn = item.x===nextItem?.x
        const nextItemIsRoughlySameColumn = Boolean(nextItem?.x && nextItem?.x>=item.x-10 && nextItem?.x<=item.x+10) // second line of parentheticals
        const nextItemOnSameLine = item.y===nextItem?.y
        const nextItemHasParagraphBreak = Boolean(nextItem?.y && item.h>0 && item.y - item.h > nextItem?.y)

        // updated item with helper variables, will be used below to determine the scriptElement type
        const itemWithMeta: IScriptSceneContentTextElement = {..._.pick(item,['x','y','w','h','str','pageCount']), prevItemIsSameColumn, prevItemOnSameLine, prevItemHasParagraphBreak}

        if(isItemDualCharacterLeft(itemWithMeta, margins.dualCharacterLeft)) isDualDialogueMode = true
        if(!doesStringHaveLength(itemWithMeta.str)) continue
        
        // helper functions to keep code DRY
        const cleanItemString = () => ` ${itemWithMeta.str.trim()}`
        const createItemObject = (scriptElement: string, isDualDialogueMode: boolean=false, sc: string|null, scriptPage: string, isRevision: boolean): IScriptSceneInfo => ({
          pageCount: itemWithMeta.pageCount, 
          x: itemWithMeta.x, 
          y: itemWithMeta.y, 
          w: itemWithMeta.w, 
          h: itemWithMeta.h, 
          str: itemWithMeta.str,
          pageDimensions: itemWithMeta.pageDimensions,
          prevItemHasParagraphBreak: Boolean(itemWithMeta.prevItemHasParagraphBreak),
          prevItemIsSameColumn: Boolean(itemWithMeta.prevItemIsSameColumn),
          prevItemOnSameLine: Boolean(itemWithMeta.prevItemOnSameLine),
          description: null,
          isDualDialogueMode,
          omit: false,
          sc,
          scriptElement,
          scriptPage,
          textArray: isRevision ? [{text: itemWithMeta.str, marks: [{ type: 'revision', revision: '' }]}] : [{text: itemWithMeta.str, marks: null}], 
        })
        const getScriptElementAndUpdateMargins = (isDualDialogueMode: boolean) => {
          const scriptElement = getScriptElementNameByMargin(itemWithMeta, isDualDialogueMode, margins)
          if(scriptElement && scriptElement!=='pageHeader' && margins[scriptElement].actual===null) {
            margins.updateMargins(scriptElement, itemWithMeta.x) // make updates to margins, based on current info
          } 
          return scriptElement
        }
        
        const scriptElement = getScriptElementAndUpdateMargins(isDualDialogueMode)

        // if we're in dual dialogue mode
        if(isDualDialogueMode) {
          switch(scriptElement) {
            case 'dualCharacterLeft':
              if(dualCharacterLeftItem===null) {
                dualCharacterLeftItem = createItemObject(scriptElement, true, sc, scriptPage, isRevision)
              } else {
                dualCharacterLeftItem.textArray?.push({text: cleanItemString(), marks: null})
              }
              break
            case 'dualCharacterRight':
              if(dualCharacterRightItem===null) {
                dualCharacterRightItem = createItemObject(scriptElement, true, sc, scriptPage, isRevision)
              } else {
                dualCharacterRightItem.textArray?.push({text: cleanItemString(), marks: null})
              }
              break
            case 'dualParentheticalLeft':
              if(dualParentheticalLeftItem===null) {
                dualParentheticalLeftItem = createItemObject(scriptElement, true, sc, scriptPage, isRevision)
              } else {
                dualParentheticalLeftItem.textArray?.push({text: cleanItemString(), marks: null})
              }
              break
            case 'dualParentheticalRight':
              if(dualParentheticalRightItem===null) {
                dualParentheticalRightItem = createItemObject(scriptElement, true, sc, scriptPage, isRevision)
              } else {
                dualParentheticalRightItem.textArray?.push({text: cleanItemString(), marks: null})
              }
              break
            case 'dualDialogueLeft':
              if(dualDialogueLeftItem===null) {
                dualDialogueLeftItem = createItemObject(scriptElement, true, sc, scriptPage, isRevision)
              } else {
                dualDialogueLeftItem.textArray?.push({text: cleanItemString(), marks: null})
              }
              break
            case 'dualDialogueRight':
              if(dualDialogueRightItem===null) {
                dualDialogueRightItem = createItemObject(scriptElement, true, sc, scriptPage, isRevision)
              } else {
                dualDialogueRightItem.textArray?.push({text: cleanItemString(), marks: null})
              }
              break
            default:
          }

          const nextItemWithMeta: IScriptSceneContentTextElement = {
            x: nextItem?.x ?? 0,
            y: nextItem?.y ?? 0,
            w: nextItem?.w ?? 0,
            h: nextItem?.h ?? 0,
            str: nextItem?.str ?? '',
            pageCount: 0,
            pageDimensions: margins.pageDimensions,
            prevItemHasParagraphBreak: nextItemHasParagraphBreak,
            prevItemIsSameColumn: nextItemIsSameColumn,
            prevItemOnSameLine: nextItemOnSameLine,
          }
          // determine if nextItem is a dual dialogue item
          const nextItemIsDual: boolean|undefined = isNextItemDual(nextItemWithMeta, margins)

          if(!nextItemIsDual) { // save dual dialogue
            if(dualCharacterLeftItem) parsedContent.push(dualCharacterLeftItem)
            if(dualParentheticalLeftItem) parsedContent.push(dualParentheticalLeftItem)
            if(dualDialogueLeftItem) parsedContent.push(dualDialogueLeftItem)
            if(dualCharacterRightItem) parsedContent.push(dualCharacterRightItem)
            if(dualParentheticalRightItem) parsedContent.push(dualParentheticalRightItem)
            if(dualDialogueRightItem) parsedContent.push(dualDialogueRightItem)
            dualCharacterLeftItem = null
            dualCharacterRightItem = null
            dualDialogueLeftItem = null
            dualDialogueRightItem = null
            dualParentheticalLeftItem = null
            dualParentheticalRightItem = null
            isDualDialogueMode = false
          }
          continue
        }

        // if this item is the beginning of a new element
        if(combinedItem===null) {
          switch(scriptElement) {
            case 'scriptPage': // is a page number
              scriptPage = itemWithMeta.str.replace(/[^a-zA-Z0-9]/,'')
              combinedItem = null
              isDualDialogueMode = false
              continue
            case 'sceneNumberLeft': // is a scene number (left)
              if(itemWithMeta.str && itemWithMeta.str.trim().length) sc = itemWithMeta.str.replace(/\s/g, '')
              combinedItem = null
              isDualDialogueMode = false
              continue
            case 'sceneNumberRight': // is a scene number (right)
              combinedItem = null
              isDualDialogueMode = false
              continue
            case 'revisionMark': // is a revision mark
              if(itemWithMeta.str && itemWithMeta.str.trim().length) isRevision = true
              combinedItem = null
              isDualDialogueMode = false
              continue
            default:
              combinedItem = createItemObject(scriptElement, isDualDialogueMode, sc, scriptPage, isRevision)
          }
        } else { // this item is part of an existing element
          combinedItem.textArray?.push({text: cleanItemString(), marks: null})  // if on next line, add a space
          combinedItem.w+=itemWithMeta.w
        }

        // if nextItem contains more of this dialogue (protects against paragraph breaks in dialogue)
        if(combinedItem.scriptElement==='dialogue' && nextItemIsSameColumn) { 
          continue
        }
        // if nextItem contains more of this parenthetical
        if(combinedItem.scriptElement==='parenthetical' && nextItemIsRoughlySameColumn) { 
          continue
        }
        // if heading text is 'OMITTED' then set the omit bool
        if(combinedItem.scriptElement==='heading' && combineTextStrings(combinedItem.textArray)==='OMITTED') { 
          combinedItem.omit = true
        }
        // recheck 'shot' to ensure scriptElement assignment is correct, now that we have the whole paragraph to judge from
        if(combinedItem.scriptElement==='shot' && !isStringUppercase(combineTextStrings(combinedItem.textArray))) { 
          combinedItem.scriptElement = 'action'
        }

        // final cleanup & save
        if(
          combinedItem!==null && // ensure there's an object to save
          ( nextItemHasParagraphBreak || // if there's a paragraph break, the next item is another element
            combinedItem?.pageCount!==nextItem?.pageCount || // next item is on the next page
            (!nextItemOnSameLine && combinedItem?.x!==nextItem?.x) || // not on same line and not same margin
            (nextItemOnSameLine && combinedItem.x+combinedItem.w+60 < nextItem.x) // is on same line but nextItem is far away
          )
        ) { 
          const combinedTextStrings = combineTextStrings(combinedItem.textArray) || ''
          if(!isItemContinued(combinedItem, margins.continued) && !isItemPageHeader({ x: combinedItem.x, y: combinedItem.y, str: combinedTextStrings })) {
            parsedContent.push(combinedItem) 
          } 
          combinedItem = null
        }
        isRevision = false
      }

      return parsedContent
    }

    function removeTitlePageContent(sortedContent: IScriptSceneContentTextElement[]=[]) {
      try {
        let currentscriptPage: number|null = null
        const titlescriptPages: number[] = sortedContent?.reduce((acc: number[],cur: IScriptSceneContentTextElement)=>{ // get array of pages that are likely title pages, act break pages, etc.
          if(cur.pageCount!==currentscriptPage && cur.y > pageNumberLimit) return acc // ignore page numbers
          if(cur.pageCount!==currentscriptPage && cur.y < topMarginLimit) acc = [...acc, cur.pageCount]
          currentscriptPage = cur.pageCount
          return acc
        },[])
        return sortedContent?.filter(c=>!titlescriptPages?.includes(c.pageCount)) ?? sortedContent // return content without title pages
      } catch(e) {
        handleError(e)
      }
    }

    function getScriptName(sortedContent: IScriptSceneContentTextElement[]=[]) {
      try {
        // determine if first line is on a title page
        if(_.isArray(sortedContent) && sortedContent.length && sortedContent[0]?.y < topMarginLimit) { 
          // the first line starts lower than a regular script page, it's likely a title page
          return sortedContent[0]?.str?.trim() ?? 'Untitled' 
        } else {
          return 'Untitled'
        }
      } catch(e) {
        handleError(e)
      }
    }

    function getScriptElementNameByMargin(item: IScriptSceneContentTextElement, dualDialogueMode: boolean=false, margins: Margin) {
      // the order of these if statements is what's important here, they've been tuned to find the most likely element first
      if(isItemPageHeader({x: item.x, y: item.y, str: item.str})) return 'pageHeader'
      if(dualDialogueMode && isItemDualCharacterLeft(item, margins.dualCharacterLeft)) return 'dualCharacterLeft'
      if(dualDialogueMode && isItemDualParentheticalLeft(item, margins.dualParentheticalLeft)) return 'dualParentheticalLeft'
      if(dualDialogueMode && isItemDualDialogueLeft(item, margins.dualDialogueLeft)) return 'dualDialogueLeft'
      if(dualDialogueMode && isItemDualCharacterRight(item, margins.dualCharacterRight)) return 'dualCharacterRight'
      if(dualDialogueMode && isItemDualParentheticalRight(item, margins.dualParentheticalRight)) return 'dualParentheticalRight'
      if(dualDialogueMode && isItemDualDialogueRight(item, margins.dualDialogueRight)) return 'dualDialogueRight'
      if(isItemScriptPage(item, margins.scriptPage)) return 'scriptPage'
      if(isItemSceneNumberLeft(item, margins.sceneNumberLeft)) return 'sceneNumberLeft'
      if(isItemHeading(item, margins.heading)) return 'heading'
      if(isItemSceneNumberRight(item, margins.sceneNumberRight)) return 'sceneNumberRight'
      if(isItemRevisionMark(item, margins.revisionMark)) return 'revisionMark'
      if(isItemShot(item, margins.shot)) return 'shot'
      if(isItemCharacter(item, margins.character)) return 'character'
      if(isItemParenthetical(item, margins.parenthetical)) return 'parenthetical'
      if(isItemDialogue(item, margins.dialogue)) return 'dialogue'
      if(isItemTransition(item, margins.transition)) return 'transition'
      if(isItemAction(item, margins.action)) return 'action'
      return 'action'
    }

    // FUNCTIONS TO IDENTIFY THE CORRECT SCRIPT ELEMENT TYPE
    function isStringHeading(str: string): boolean | undefined {
      try {
        const headerStrings = ['INT.','INT-','INT/','INT ','EXT.','EXT-','EXT/','EXT ','I/E.','I/E-','I/E ']
        return headerStrings.includes(str.toUpperCase().trim().substring(0, 4))
      } catch(e) {
        handleError(e)
      }
    }

    function isItemScriptPage(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return item.y > pageNumberLimit && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemContinued(item: IScriptSceneInfo, margin: MarginContent): boolean | undefined {
      try {
        return Boolean(item.y > pageHeaderLimit && item.str.includes('CONTINUED: ') && isWithinMargins(item.x, margin))
      } catch(e) {
        handleError(e)
      }
    }

    function isItemPageHeader(item: {x: number, y: number, str: string}): boolean | undefined {
      try {
        return Boolean(item.x && item.y > pageHeaderLimit && item.x < 490 && doesStringContainItemFromArray(item.str, [...colors,'(',')','/']))
      } catch(e) {
        handleError(e)
      }
    }

    function isItemHeading(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return item.str.trim()==='OMITTED' || (isStringUppercase(item.str) && isStringHeading(item.str) && isWithinMargins(item.x, margin))
      } catch(e) {
        handleError(e)
      }
    }

    function isItemAction(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return item?.prevItemHasParagraphBreak && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemCharacter(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return item.prevItemHasParagraphBreak && isStringUppercase(item.str) && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemParenthetical(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return !item.prevItemOnSameLine && item.str.startsWith('(') && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemDialogue(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return !item.prevItemOnSameLine && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemShot(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return item.prevItemHasParagraphBreak && isStringUppercase(item.str) && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemTransition(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        const rightAlignMargin = item.x + item.w
        return item.x > 350 && isWithinMargins(rightAlignMargin, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemSceneNumberLeft(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return doesStringContainNumbers(item.str) && isWithinMargins(item.x, margin) && isStringLengthLessThanX(item.str, 10)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemSceneNumberRight(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return doesStringContainNumbers(item.str) && isWithinMargins(item.x, margin) && isStringLengthLessThanX(item.str, 10)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemRevisionMark(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return isWithinMargins(item.x, margin) && isStringLengthLessThanX(item.str, 3)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemDualCharacterLeft(item: IScriptSceneContentTextElement, margin: MarginContent ): boolean | undefined {
      try {
        return item.prevItemHasParagraphBreak && isStringUppercase(item.str) && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemDualCharacterRight(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return item.prevItemOnSameLine && isStringUppercase(item.str) && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }


    function isItemDualParentheticalRight(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return item.prevItemOnSameLine && item.str.startsWith('(') && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemDualParentheticalLeft(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return !item.prevItemOnSameLine && item.str.startsWith('(') && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemDualDialogueLeft(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return !item.prevItemOnSameLine && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isItemDualDialogueRight(item: IScriptSceneContentTextElement, margin: MarginContent): boolean | undefined {
      try {
        return item.prevItemOnSameLine && isWithinMargins(item.x, margin)
      } catch(e) {
        handleError(e)
      }
    }

    function isWithinMargins(num: number, margin: MarginContent): boolean | undefined { // return bool if element is within margins
      try {
        if(margin.actual===num || margin.standard===num) return true
        return isWithinBounds(num, margin?.leftMost, margin?.rightMost)
      } catch(e) {
        handleError(e)
      }
    }

    function isWithinBounds(num: number, low: number, high: number): boolean | undefined {
      try {
        return _.isInteger(num) && _.isInteger(low) && _.isInteger(high) && num >= low && num <= high
      } catch(e) {
        handleError(e)
      }
    }

    function isNextItemDual(nextItem: IScriptSceneContentTextElement|null, margins: Margin): boolean | undefined {
      try {
        if(!nextItem) return false
        return (
          isItemDualCharacterLeft(nextItem, margins.dualCharacterLeft) ||
          isItemDualParentheticalLeft(nextItem, margins.dualParentheticalLeft) ||
          isItemDualDialogueLeft(nextItem, margins.dualDialogueLeft) ||
          isItemDualCharacterRight(nextItem, margins.dualCharacterRight) ||
          isItemDualParentheticalRight(nextItem, margins.dualParentheticalRight) ||
          isItemDualDialogueRight(nextItem, margins.dualDialogueRight)
        )
      } catch(e) {
        handleError(e)
      }
    }

    // STRING HELPER FUNCTIONS
    function isStringUppercase(str:string|null|undefined=''): boolean | undefined {
      try {
        return str?.toUpperCase()===str ?? false
      } catch(e) {
        handleError(e)
      }
    }

    function isStringLengthLessThanX(str: string='', x: number=0): boolean | undefined {
      try {
        return str.length < x
      } catch(e) {
        handleError(e)
      }
    }

    function doesStringHaveLength(str: string=''): boolean | undefined {
      try {
        return str?.trim()?.length > 0 ?? false
      } catch(e) {
        handleError(e)
      }
    }

    function doesStringContainNumbers(str: string=''): boolean | undefined {
      try {
        const hasNumbers = str?.match(/\d/) ?? []
        return hasNumbers?.length > 0 ?? false
      } catch(e) {
        handleError(e)
      }
    }

    function doesStringContainItemFromArray(str: string='', array: string[]=[]): boolean | undefined {
      try {
        for(let i=0;i<array.length;i++) {
          if(str.toLowerCase().includes(array[i].toLowerCase())) return true
        }
        return false
      } catch(e) {
        handleError(e)
      }
    }

    // // GENERAL HELPER FUNCTIONS
    function cleanIgnoredItems(str: string='', ignoreArray: string[]=[]): string | undefined {
      try {
        let newString = str
        for(let i=0;i<ignoreArray.length;i++) {
          newString = newString.replace(ignoreArray[i],'')
        }
        return newString.trim()
      } catch(e) {
        handleError(e)
      }
    }

    function getPageSize(dimensions: ICoordinates|undefined): "letter" | "a4" | "legal" | null | undefined {
      try {
        if(dimensions?.x===612 && dimensions?.y===792) return 'letter'
        if(dimensions?.x===612 && dimensions?.y===1008) return 'legal'
        if(dimensions?.x===595 && dimensions?.y===842) return 'a4'
        return null
      } catch(e) {
        handleError(e)
      }
    }

    function combineTextStrings(textArray: IScriptSceneContentTextItem[]|undefined): string | null | undefined {
      try {
        if(_.isArray(textArray)) return textArray.map(t=>t.text).join('')
        return null
      } catch(e) {
        handleError(e)
      }
    }

    // // ERROR HANDLING & FORMAT CHECKS
    function checkScriptContentWithDimensions(sortedContent: IScriptSceneContentTextElement[]|undefined): true | undefined {
      try {
        if(!_.isArray(sortedContent)) {
          throw new Error('There was a problem uploading this file. The file may be corrupted')
        }
        if(!sortedContent?.length) {
          throw new Error('Your PDF script doesn\'t contain any text. Please ensure you\'re not uploading a scanned document')
        }
        return true
      } catch(e) {
        handleError(e)
      }
    }

    function checkContentFormatting(content: IScriptSceneInfo[]): void {
      try {
        if(!content.find(c=>c.scriptElement==='heading')) {
          throw new Error('Your PDF script may not be formatted correctly. Please check the uploaded script for formatting issues')
        }
      } catch(e) {
        handleError(e)
      }
    }

  } catch(e) {
    handleError(e)
  }
}
