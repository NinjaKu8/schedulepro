import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setSch_dood_view } from 'store/slices/local'
import Dropdown from 'react-bootstrap/Dropdown'

const views = [
  {id: '0', name: 'Grid'},
  {id: '1', name: 'Calendar'},
]

export function DoodDropdownView(): JSX.Element {
  const { t } = useTranslation()
  
  const dood_view = useAppSelector(state=>state.local.sch_dood_view)
  const dispatch = useAppDispatch()

  const handleClick = useCallback((eventKey: string|null): void => {
    if(eventKey) dispatch(setSch_dood_view(eventKey))
  },[dispatch])

  const view = views.find(d=>d.id===dood_view)

  return (
    <Dropdown onSelect={handleClick}>
      <Dropdown.Toggle variant='info' size='sm'>
        {view?.name ?? 'View'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {views.map(view=>(
          <Dropdown.Item 
            active={view.id===dood_view}
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
