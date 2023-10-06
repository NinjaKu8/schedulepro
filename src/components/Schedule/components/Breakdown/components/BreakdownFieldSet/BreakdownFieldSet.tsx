import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

import { AutoInputSelect } from 'common'
import { BreakdownLabel } from '../index'
import { useCallback } from 'react'
import { IListSelectItem } from 'common/ListSelect/ListSelect'

const list: IListSelectItem[] = [
  { _id: '0', name: 'GOWER\'S DRUGSTORE', selected: false },
  { _id: '1', name: 'BAILEY HOUSE', selected: false },
  { _id: '2', name: 'BAILEY HOUSE - KITCHEN', selected: false },
  { _id: '3', name: 'BAILEY HOUSE - LIVING ROOM', selected: false },
  { _id: '4', name: 'BRIDGE', selected: false },
  { _id: '5', name: 'BEDFORD FALLS - STREET', selected: false },
]

export function BreakdownFieldSet(): JSX.Element {
  const { t } = useTranslation()

  const handleUpdate = useCallback((id: string|null, value?: string): void => {
    if(!id) return
    if(id==='create' && value) {
      console.log('create element:', value)
    } else {
      console.log('select element:', id)
    }
  },[])

  return (
    <Form.Group id='breakdown-field-set' controlId='set'>
      <BreakdownLabel>{t('Set')}</BreakdownLabel>
      <AutoInputSelect 
        callback={handleUpdate} 
        selectOnFocus
        list={list} 
        size='sm'
        value={list[1].name} 
      />
    </Form.Group>
  )
}
