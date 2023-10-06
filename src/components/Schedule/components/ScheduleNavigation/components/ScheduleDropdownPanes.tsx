import { useCallback } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { RiLayout2Line } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from 'store/hooks'
import { updateOffcanvasComponent } from 'store/slices/local'
import { Tip } from 'common'

export function ScheduleDropdownPanes(): JSX.Element {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleSelect = useCallback((eventKey: string|null): void => {
    if(eventKey) {
      if(eventKey==='manage') dispatch(updateOffcanvasComponent('managePanes'))
    }
  },[dispatch])

  return (
    <Dropdown onSelect={handleSelect}>
      <Tip text='Select panes'>
        <Dropdown.Toggle variant='outline-primary' size='sm'>
          <RiLayout2Line /> {t('Panes')}
        </Dropdown.Toggle>
      </Tip>
      <Dropdown.Menu align='end'>
        <Dropdown.Item eventKey='0' active>Default</Dropdown.Item>
        <Dropdown.Item eventKey='1'>Breakdown</Dropdown.Item>
        <Dropdown.Item eventKey='2'>Scheduling</Dropdown.Item>
        <Dropdown.Item eventKey='2'>Cross Boarding</Dropdown.Item>
        <Dropdown.Item eventKey='3'>Cast Avail</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey='manage' active={false}>{('Manage / Save Panes')}...</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
