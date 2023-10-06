import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { NavSimple, Filter, DropdownSchedules } from 'common'

export function ManageCalendarsMenuBar(): JSX.Element {
  const { t } = useTranslation()

  const handleMoveElements = (e: string | null) => {
    console.log(e)
  }

  return (
    <NavSimple className='ps-3'>
      <Nav.Item><Button size='sm' variant='success'>{t('New')}</Button></Nav.Item>
      <Nav.Item><Button size='sm' variant='info'>{t('Duplicate')}</Button></Nav.Item>
      <Nav.Item><DropdownSchedules size='sm' variant='info' callback={handleMoveElements} toggleText='Move...' /></Nav.Item>
      <Nav.Item><Button size='sm' variant='danger'>{t('Delete')}</Button></Nav.Item>
      <Nav.Item className='ms-auto'><Filter size='sm' /></Nav.Item>   
    </NavSimple>
  )
}
