import { useCallback } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

export function CalendarDropdownEvents(): JSX.Element {
  const { t } = useTranslation()

  const handleSelect = useCallback((eventKey: string|null): void => {
    console.log('handleSelect',eventKey)
  },[])
  
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle size='sm'>{t('Events')}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey={'1'} active>{t('Travel')}</Dropdown.Item>
        <Dropdown.Item eventKey={'2'}>{t('Fitting')}</Dropdown.Item>
        <Dropdown.Item eventKey={'3'} active>{t('Rehearsal')}</Dropdown.Item>
        <Dropdown.Item eventKey={'4'}>{t('Photo')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
