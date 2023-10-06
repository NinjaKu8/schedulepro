import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { NavSimple, Filter } from 'common'

export function ManageDesignsPalettesMenuBar(): JSX.Element {
  const { t } = useTranslation()
  return (
    <NavSimple className='ps-3'>
      <Nav.Item><Button size='sm' variant='success'>{t('New')}</Button></Nav.Item>
      <Nav.Item><Button size='sm' variant='info'>{t('Duplicate')}</Button></Nav.Item>
      <Nav.Item><Button size='sm' variant='info'>{t('Share')}</Button></Nav.Item>
      <Nav.Item><Button size='sm' variant='danger'>{t('Delete')}</Button></Nav.Item>
      <Nav.Item className='ms-auto'><Filter size='sm' /></Nav.Item>   
    </NavSimple>
  )
}
