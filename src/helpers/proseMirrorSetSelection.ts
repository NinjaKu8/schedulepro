import { Selection, Transaction } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

export function proseMirrorSetSelection(view: EditorView, selection: Selection): void {
  const tr: Transaction = view.state.tr.setSelection(selection)
  view.dispatch(tr)
}