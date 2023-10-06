import { useCallback } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { HiViewList } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from 'store/hooks'
import { updateOffcanvasComponent } from 'store/slices/local'
import { Tip } from 'common'

export function ScheduleDropdownScenario(): JSX.Element {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleSelect = useCallback((eventKey: string|null): void => {
    if(eventKey) {
      if(eventKey==='manage') dispatch(updateOffcanvasComponent('manageScenarios'))
    }
  },[dispatch])

  return (
    <Dropdown onSelect={handleSelect}>
      <Tip text={t('Select scenario')}>
        <Dropdown.Toggle variant='outline-primary' size='sm'>
          <HiViewList /> Rev Blue
        </Dropdown.Toggle>
      </Tip>
      <Dropdown.Menu align='end'>
        <Dropdown.Item eventKey='0'>First Draft</Dropdown.Item>
        <Dropdown.Item eventKey='1'>Locked White</Dropdown.Item>
        <Dropdown.Item eventKey='2' active>Rev Blue</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey='manage' active={false}>{t('Manage Scenarios')}...</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
