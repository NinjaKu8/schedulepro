import { useCallback } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { BiCalendarAlt } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from 'store/hooks'
import { updateOffcanvasComponent } from 'store/slices/local'
import { Tip } from 'common'

export function ScheduleDropdownCalendar(): JSX.Element {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleSelect = useCallback((eventKey: string|null): void => {
    if(eventKey) {
      if(eventKey==='manage') dispatch(updateOffcanvasComponent('manageCalendars'))
    }
  },[dispatch])

  return (
    <Dropdown onSelect={handleSelect}>
      <Tip text={t('Select calendar')}>
        <Dropdown.Toggle variant='outline-primary' size='sm'>
          <BiCalendarAlt /> Start Jan 1
        </Dropdown.Toggle>
      </Tip>
      <Dropdown.Menu align='end'>
        <Dropdown.Item eventKey='0' active>Start Jan 1</Dropdown.Item>
        <Dropdown.Item eventKey='1'>Push 1 Week</Dropdown.Item>
        <Dropdown.Item eventKey='2'>Start Feb 14</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey='manage' active={false}>{t('Manage Calendars')}...</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
