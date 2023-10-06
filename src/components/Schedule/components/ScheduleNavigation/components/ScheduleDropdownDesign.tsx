import { useCallback } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { MdOutlineDesignServices } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from 'store/hooks'
import { updateOffcanvasComponent } from 'store/slices/local'
import { Tip } from 'common'

export function ScheduleDropdownDesign(): JSX.Element {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleSelect = useCallback((eventKey: string|null): void => {
    if(eventKey) {
      if(eventKey==='manage') dispatch(updateOffcanvasComponent('manageDesigns'))
    }
  },[dispatch])

  return (
    <Dropdown onSelect={handleSelect}>
      <Tip text='Select strip design'>
        <Dropdown.Toggle variant='outline-primary' size='sm'>
          <MdOutlineDesignServices /> Medium
        </Dropdown.Toggle>
      </Tip>
      <Dropdown.Menu align='end'>
        <Dropdown.Item eventKey='0'>Small</Dropdown.Item>
        <Dropdown.Item eventKey='1' active>Medium</Dropdown.Item>
        <Dropdown.Item eventKey='2'>Large</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey='manage' active={false}>{t('Manage Designs')}...</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
