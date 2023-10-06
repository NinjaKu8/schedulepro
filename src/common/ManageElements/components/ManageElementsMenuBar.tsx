import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { NavSimple, Filter, DropdownTC, DropdownSchedules, DropdownRenumber } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { getDropdownItemByEventKey } from 'helpers'

const categoryItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'Cast'},
  { eventKey: '2', value: 'Background'},
  { eventKey: '3', value: 'Stunts'},
  { eventKey: '4', value: 'Vehicles'},
  { eventKey: '5', value: 'Props'},
]

export function ManageElementsMenuBar(): JSX.Element {
  const { t } = useTranslation()

  const handleMoveElements = useCallback((e: string | null): void => {
    console.log(e)
  },[])

  const handleRenumber = useCallback((value: string): void => {
    console.log('renumber', value)
  },[])

  return (
    <NavSimple className='ps-3'>
      <DropdownTC
        callback={(e: string | null)=>{}}
        items={categoryItems}
        selectedItem={getDropdownItemByEventKey('1', categoryItems)} 
        size='sm' 
        variant='outline-info'
      />
      <div className='vr mx-2'></div>
      <Nav.Item><Button size='sm' variant='success'>{t('New')}</Button></Nav.Item>
      <DropdownRenumber callback={handleRenumber} />
      <Nav.Item><Button size='sm' variant='info'>{t('Duplicate')}</Button></Nav.Item>
      <Nav.Item><Button size='sm' variant='info'>{t('Merge')}</Button></Nav.Item>
      <Nav.Item><DropdownSchedules size='sm' variant='info' callback={handleMoveElements} toggleText='Move...' /></Nav.Item>
      <Nav.Item><Button size='sm' variant='danger'>{t('Delete')}</Button></Nav.Item>
      <Nav.Item className='ms-auto'><Filter size='sm' /></Nav.Item>      
    </NavSimple>
  )
}
