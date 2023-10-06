import { TextSelection } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { proseMirrorGetSelectionForCurrentMark, proseMirrorSetSelection } from 'helpers'

export function proseMirrorSetSelectionToCurrentMark(view: EditorView, markName: string): void {
  const range = proseMirrorGetSelectionForCurrentMark(view.state, view.state.selection.from, markName)
  if(!range) return
  proseMirrorSetSelection(view, new TextSelection(range.from, range.to))
}