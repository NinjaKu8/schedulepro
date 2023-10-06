import _ from 'lodash'
import { IScriptSceneContentText, ScriptSceneMark } from 'types/script'

// create proseMirror text content, optionally add marks
export function createContentText(text: string, marks: ScriptSceneMark[] | null =[]): IScriptSceneContentText|null {
  if(_.isString(text)) {
    const content: IScriptSceneContentText = { "type": "text", "text": text }
    if(marks?.length) content.marks = marks
    return content
  } else {
    return null
  }
}
