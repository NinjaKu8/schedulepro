import _ from 'lodash'

import { roundFloatToEighth } from 'helpers'
import { IScriptSceneContentText } from 'types/script'

type BlockTypeParam = {
  name: string;
  characters: number|null;
  linesBefore: number;
}

// VARIABLES - adjust these to refine eighth calculations
const maxLinesPerPage = 56 // FinalDraft is actually 54, but 56 is technically correct historically

const blockTypeParams: BlockTypeParam[] = [
// characters: number of characters across before line break
// linesBefore: number of lines this block adds before itself 
  { name: 'heading', characters: 61, linesBefore: 2 },
  { name: 'action', characters: 61, linesBefore: 1 },
  { name: 'character', characters: 38, linesBefore: 1 },
  { name: 'parenthetical', characters: 26, linesBefore: 0 },
  { name: 'dialogue', characters: 35, linesBefore: 0 },
  { name: 'transition', characters: 16, linesBefore: 1 },
  { name: 'shot', characters: 61, linesBefore: 1 },
  { name: 'general', characters: 61, linesBefore: 0 },
  { name: 'dualdialogue', characters: null, linesBefore: 1 },
]

// PRIMARY FUNCTION
export function getScenePages(content: IScriptSceneContentText[]) { // accept proseMirror content array and return the page count for this scene
  // try {
  //   const sceneLines = getSceneLines(content)
  //   if(sceneLines!==null) {
  //     const rawPageCount = (sceneLines / (maxLinesPerPage / 8)) / 8
  //     return roundFloatToEighth(rawPageCount)
  //   } 
    return null
  // } catch(e) {
  //   console.error(e)
  // }
}

// SUB-FUNCTIONS

// function getSceneLines(content: IScriptSceneContentText[]) { // get the number of script lines in this scene
//   let sceneLines = 0
//   for(let b=0;b<content.length;b++) {
//     const block: IScriptSceneContentText = content[b]
//     const blockType: IScriptSceneContentText['type'] = block?.type
//     const blockTypeParam: BlockTypeParam|undefined = getBlockTypeParam(blockType)

//     if(blockType!=='dualdialogue') { // if regular block, process normally

//       sceneLines+= getLinesFromBlock(block, blockTypeParam?.characters)
      
//     } else {  // if dual dialogue
//       let leftLines=0, rightLines=0
//       for(let d=0;d<block?.content[0]?.content?.length;d++) {
//         const dualBlockTypeParam = getBlockTypeParam(block?.content[0]?.content[d]?.type)
//         leftLines = getLinesFromBlock(block?.content[0]?.content[d], dualBlockTypeParam?.characters)
//       }
//       for(let d=0;d<block?.content[1]?.content?.length;d++) {
//         const dualBlockTypeParam = getBlockTypeParam(block?.content[1]?.content[d]?.type)
//         rightLines = getLinesFromBlock(block?.content[1]?.content[d], dualBlockTypeParam?.characters)
//       }
//       sceneLines+= leftLines > rightLines ? leftLines : rightLines // use the number of lines from the taller dualdialogue block
//     }
//     sceneLines+= blockTypeParam?.linesBefore // add the lines before the block (ie heading can have two lines above it)
//   }
//   return sceneLines
// }

// function getLinesFromBlock(block: IScriptSceneContentText, blockTypeParamCharacters: BlockTypeParam['characters']|undefined): number { // get the number of script lines in this block
//   let blockLines = 1, characters = 0
//   const blockText = getBlockText(block?.content)
//   if(blockText && blockTypeParamCharacters) {
//     const wordsArray = getWordsArray(blockText, blockTypeParamCharacters)
//     if(wordsArray?.length) {
//       for(let w=0;w<wordsArray.length;w++) {
//         const word = wordsArray[w]
//         if(characters + word?.length < blockTypeParamCharacters) { // will this word fit on this line
//           characters+=word?.length
//         } else { // else, word doesn't fit on line, go to next line, add this word's characters to next line
//           characters = word?.length
//           blockLines++
//         }
//       }
//     }
//     return blockLines
//   } else {
//     return 0
//   }
// }

// function getBlockText(blockContent) { // take all text lines from block and combine to return a single string
//   try {
//     if(blockContent?.length) {
//       let blockText = ''
//       for(let b=0;b<blockContent.length;b++) {
//         const textObject = blockContent[b]
//         if(textObject && textObject?.text?.length) {
//           blockText = blockText + textObject?.text
//         }
//       }
//       return blockText
//     } else {
//       return null
//     }
//   } catch(e) {
//     console.error(e)
//   }
// }

// function getWordsArray(blockText=[], blockCharacters) { // break text string into array of individual words
//   try {
//     if(blockText?.length && _.isNumber(blockCharacters)) {
//       const regex = new RegExp('.{1,' + blockCharacters + '}','g')
//       const split = blockText.split(/( )/g)
//       if(split?.length) {
//         const wordsArray = []
//         for(let w=0;w<split?.length;w++) {
//           const word = split[w]
//           if(word?.length) { // ensure that word has a length, protect against empty strings
//             if(word?.length <= blockCharacters) {
//               wordsArray.push(word)
//             } else { // else this word longer than this block's max characters?
//               wordsArray.push(...word.match(regex)) // split word into chunks
//             }
//           }
//         }
//         return wordsArray
//       }
//       return null
//     } else {
//       return null
//     }
//   } catch(e) {
//     console.error(e)
//   }
// }

// function getBlockTypeParam(type: string) {
//   return blockTypeParams.find(b=>b.name===type)
// }
