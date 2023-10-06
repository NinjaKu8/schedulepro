import { EditorView } from 'prosemirror-view'
import { toggleMark } from 'prosemirror-commands'
import { useEditorEventCallback } from '@nytimes/react-prosemirror'

// update a mark (strong, em, etc) for the current selection
export function useProseMirrorToggleMark(mark: string, attrs?: any): ()=>void {
  return useEditorEventCallback((view: EditorView|null) => {
    if(view) toggleMark(view.state.schema.marks[mark], attrs)(view.state, view.dispatch)
  })
}