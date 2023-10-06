import { EditorView } from 'prosemirror-view'
import { NodeType } from 'prosemirror-model'
import { setBlockType } from 'prosemirror-commands'
import { useEditorEventCallback } from '@nytimes/react-prosemirror'

// update a node (heading, action, character, etc.) for the current selection
export function useProseMirrorToggleNode(nodeName: string): ()=>void {
  return useEditorEventCallback((view: EditorView|null) => {
    if(view) {
      const nodeType: NodeType|undefined = view.state.schema.nodes[nodeName]
      if(nodeType) return setBlockType(nodeType)(view.state, view.dispatch)
    }
  })
}