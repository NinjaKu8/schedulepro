import { EditorState, Selection } from 'prosemirror-state'
import { NodeType } from 'prosemirror-model'
import { NodeSelection } from 'prosemirror-state'
import { useEditorState } from '@nytimes/react-prosemirror'

// determine if current selection contains a node (heading, action, character, etc.)
export function useIsProseMirrorNodeActive(nodeName: string): boolean {
  const state: EditorState|null = useEditorState()
  const nodeType: NodeType|undefined = state?.schema.nodes[nodeName]
  const selection: Selection|undefined = state?.selection
  if(selection && nodeType) {
    let {$from, to, node} = selection as NodeSelection
    if(node) return node.hasMarkup(nodeType)
    return to <= $from.end() && $from.parent.hasMarkup(nodeType)
  }
  return false
}
