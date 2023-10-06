
import { roundFloatToEighth } from 'helpers'
import { IScriptSceneContent } from 'types/script'

type BlockTypeParam = {
  name: string;
  characters: number | null;
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
export function getScenePages(content: IScriptSceneContent['content'], handleError:(e: unknown)=>void) { // accept proseMirror content array and return the page count for this scene
  try {
    const sceneLines = getSceneLines(content)
    if(sceneLines) {
      const rawPageCount = (sceneLines / (maxLinesPerPage / 8)) / 8
      return roundFloatToEighth(rawPageCount)
    } 
    return null
  } catch(e) {
    handleError(e)
  }
}

// SUB-FUNCTIONS

function getSceneLines(content: IScriptSceneContent['content']) { // get the number of script lines in this scene
  let sceneLines = 0
  for(let b=0;b<content.length;b++) {
    const block = content[b]
    const blockType: IScriptSceneContent['type'] = block?.type
    const blockTypeParam: BlockTypeParam|undefined = getBlockTypeParam(blockType)
    if(!blockTypeParam) continue

    if(blockType!=='dualdialogue') { // if regular block, process normally

      sceneLines+= getLinesFromBlock(block, blockTypeParam?.characters)
      
    } else {  // if dual dialogue
      let leftLines=0, rightLines=0
      for(let d=0;d<block?.content[0]?.content?.length;d++) {
        const dualBlockTypeParam = getBlockTypeParam(block?.content[0]?.content[d]?.type)
        if(!dualBlockTypeParam) continue
        leftLines = getLinesFromBlock(block?.content[0]?.content[d], dualBlockTypeParam.characters)
      }
      for(let d=0;d<block?.content[1]?.content?.length;d++) {
        const dualBlockTypeParam = getBlockTypeParam(block?.content[1]?.content[d]?.type)
        if(!dualBlockTypeParam) continue
        rightLines = getLinesFromBlock(block?.content[1]?.content[d], dualBlockTypeParam.characters)
      }
      sceneLines+= leftLines > rightLines ? leftLines : rightLines // use the number of lines from the taller dualdialogue block
    }
    sceneLines+= blockTypeParam?.linesBefore // add the lines before the block (ie heading can have two lines above it)
  }
  return sceneLines
}

// TODO: fix 'any' type below
function getLinesFromBlock(block: any, blockTypeParamCharacters: BlockTypeParam['characters']): number { // get the number of script lines in this block
  let blockLines = 1, characters = 0
  const blockText = getBlockText(block?.content) // TODO: why is this block.content and not block.text?
  if(blockText && blockTypeParamCharacters) {
    const wordsArray = getWordsArray(blockText, blockTypeParamCharacters)
    if(wordsArray?.length) {
      for(let w=0;w<wordsArray.length;w++) {
        const word = wordsArray[w]
        if(characters + word?.length < blockTypeParamCharacters) { // will this word fit on this line
          characters+=word?.length
        } else { // else, word doesn't fit on line, go to next line, add this word's characters to next line
          characters = word?.length
          blockLines++
        }
      }
    }
    return blockLines
  } else {
    return 1
  }
}

function getBlockText(blockContent: IScriptSceneContent['content']): string|null { // take all text lines from block and combine to return a single string
  if(blockContent?.length) {
    let blockText = ''
    for(let b=0;b<blockContent.length;b++) {
      const textObject = blockContent[b]
      if(textObject && textObject?.text?.length) {
        blockText = blockText + textObject?.text
      }
    }
    return blockText
  } else {
    return null
  }
}

function getWordsArray(blockText: string, blockCharacters: number): string[]|null { // break text string into array of individual words
  const regex: RegExp = new RegExp('.{1,' + blockCharacters + '}','g')
  const split: string[] = blockText.split(/( )/g)
  if(split?.length) {
    const wordsArray: string[] = []
    for(let w=0;w<split?.length;w++) {
      const word: string = split[w]
      if(word?.length) { // ensure that word has a length, protect against empty strings
        if(word?.length <= blockCharacters) {
          wordsArray.push(word)
        } else { // else this word longer than this block's max characters?
          const wordSplit = word.match(regex) // split word into chunks
          if(!wordSplit) continue
          wordsArray.push(...wordSplit) // split word into chunks
        }
      }
    }
    return wordsArray
  }
  return null
}

function getBlockTypeParam(blockType: string): BlockTypeParam|undefined {
  return blockTypeParams.find(b=>b.name===blockType)
}
