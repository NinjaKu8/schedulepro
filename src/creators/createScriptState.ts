import { EditorStateConfig } from 'prosemirror-state'

import { initialScriptState } from 'globals/initialScriptState'
import { scriptSchema } from 'globals/scriptSchema'

export function createScriptState(content?: Node): EditorStateConfig {
  try {
    return {
      ...initialScriptState,
      doc: scriptSchema.nodeFromJSON({ "type": "doc", "content": content })
    }
  } catch(e) {
    console.error('Error creating TC Script Schema',e)
    return initialScriptState
  }
}