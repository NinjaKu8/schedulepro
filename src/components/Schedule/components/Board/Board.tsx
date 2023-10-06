
import { BoardMenuBar, BoardStrips, BoardCalendar } from './components'
import { useAppSelector } from 'store/hooks'

type Props = {
  boardId: string;
  handle?: boolean;
}

export function Board({ boardId, handle }: Props): JSX.Element {
  const temp_board_views = useAppSelector(state=>state.local.temp_board_views)
  const temp_board_view = temp_board_views[boardId]
  return (
    <>
      <BoardMenuBar boardId={boardId} />
      {temp_board_view==='0'
        ? <BoardStrips boardId={boardId} handle={handle} />
        : <BoardCalendar boardId={boardId} />
      }
    </>
  )
}
