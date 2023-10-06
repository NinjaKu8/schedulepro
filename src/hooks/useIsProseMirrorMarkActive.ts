import { Mark } from 'prosemirror-model'
import { EditorState } from 'prosemirror-state'
import { useEditorState } from '@nytimes/react-prosemirror'

// determine if current selection contains a mark (strong, em, etc)
export function useIsProseMirrorMarkActive(mark: string): boolean {
  const state: EditorState|null = useEditorState()
  if(state) {
    const { from, to, empty } = state.selection
    if(empty) return !!mark && !!state.storedMarks && state.storedMarks.some((m: Mark) => m.type.name === mark)
    return state.doc.rangeHasMark(from, to, state.schema.marks[mark])
  }
  return false
}