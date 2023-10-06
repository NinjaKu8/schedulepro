
import { NavSimple } from 'common'
import { BoardButtonAddDay, BoardButtonAddBanner, BoardButtonDuplicate, BoardButtonGroup, BoardButtonMerge, BoardButtonRecycle, BoardButtonSplit, BoardDropdownView } from './components'

type Props = {
  boardId: string;
}

export function BoardMenuBar({ boardId }: Props): JSX.Element {
  return (
    <NavSimple>
      <BoardDropdownView boardId={boardId} />
      <BoardButtonAddDay />
      <BoardButtonAddBanner />
      <BoardButtonDuplicate boardId={boardId} />
      <BoardButtonSplit boardId={boardId} />
      <BoardButtonMerge boardId={boardId} />
      <BoardButtonGroup boardId={boardId} />
      <BoardButtonRecycle boardId={boardId} />
    </NavSimple>
  )
}
