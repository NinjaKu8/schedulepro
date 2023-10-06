import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setTemp_board_views } from 'store/slices/local'
import Dropdown from 'react-bootstrap/Dropdown'

type Props = {
  boardId: string;
}

const views = [
  {id: '0', name: 'Strips'},
  {id: '1', name: 'Calendar'},
]

export function BoardDropdownView({ boardId }: Props): JSX.Element {
  const { t } = useTranslation()
  
  const temp_board_views = useAppSelector(state=>state.local.temp_board_views)
  const temp_board_view = temp_board_views[boardId]
  const dispatch = useAppDispatch()

  const handleClick = useCallback((eventKey: string|null): void => {
    if(eventKey) dispatch(setTemp_board_views({...temp_board_views, [boardId]: eventKey}))
  },[dispatch, temp_board_views, boardId])

  const view = views.find(d=>d.id===temp_board_view)

  return (
    <Dropdown onSelect={handleClick}>
      <Dropdown.Toggle variant='info' size='sm'>
        {view?.name ?? 'View'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {views.map(view=>(
          <Dropdown.Item 
            active={view.id===temp_board_view}
            eventKey={view.id}
            key={view.id}
          >
            {t(view.name)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}