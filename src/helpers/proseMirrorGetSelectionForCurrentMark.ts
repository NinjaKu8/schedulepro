import { EditorState } from 'prosemirror-state'
import { ResolvedPos } from 'prosemirror-model'

type Response = {
  from: ResolvedPos,
  to: ResolvedPos
}

export function proseMirrorGetSelectionForCurrentMark(state: EditorState, pos: number, markName: string): Response | null {
  const $pos = state.doc.resolve(pos)  
  const { parent, parentOffset } = $pos
  const start = parent.childAfter(parentOffset)
  if (!start.node) return null
  const mark = start.node.marks.find(mark => mark.type === state.schema.marks[markName])
  if (!mark) return null
  let startIndex = $pos.index()
  let startPos = $pos.start() + start.offset
  let endIndex = startIndex + 1
  let endPos = startPos + start.node.nodeSize
  while (startIndex > 0 && mark.isInSet(parent.child(startIndex - 1).marks)) {
    startIndex -= 1
    startPos -= parent.child(startIndex).nodeSize
  }
  while (endIndex < parent.childCount && mark.isInSet(parent.child(endIndex).marks)) {
    endPos += parent.child(endIndex).nodeSize
    endIndex += 1
  }
  return { from: state.doc.resolve(startPos), to: state.doc.resolve(endPos) }
}