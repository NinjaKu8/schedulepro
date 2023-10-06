import { history } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import { EditorStateConfig } from 'prosemirror-state'

import { scriptSchema } from './scriptSchema'
import { scriptKeymap } from './scriptKeymap'
import { proseMirrorRevisionPlugin } from 'helpers/proseMirrorRevisionPlugin'

export const initialScriptState: EditorStateConfig = {
  schema: scriptSchema,
  doc: scriptSchema.nodeFromJSON({ 'type': 'doc', 'content': []}),
  plugins: [
    history(),
    keymap(scriptKeymap),
    proseMirrorRevisionPlugin
  ]
}
