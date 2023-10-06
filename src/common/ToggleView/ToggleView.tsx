import { useCallback } from 'react'
import { BsViewStacked, BsViewList } from 'react-icons/bs'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setIsViewCard } from 'store/slices/local'

export function ToggleView(): JSX.Element {
  const isViewCard = useAppSelector(state=>state.local.isViewCard)
  const dispatch = useAppDispatch()

  const handleChange = useCallback((val: string): void => {
    dispatch(setIsViewCard(val==='card'))
  },[dispatch])

  return (
    <div>
      <ToggleButtonGroup type="radio" name='toggleView' defaultValue={isViewCard ? 'card' : 'list'} onChange={handleChange}>
        <ToggleButton id="list" value='list' size='sm' variant='info'>
          <BsViewList />
        </ToggleButton>
        <ToggleButton id="card" value='card' size='sm' variant='info'>
          <BsViewStacked />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
