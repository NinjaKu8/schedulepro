import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

import { AutoInputSelect } from 'common'
import { BreakdownLabel } from '../index'
import { useCallback } from 'react'
import { IListSelectItem } from 'common/ListSelect/ListSelect'

const list: IListSelectItem[] = [
  { _id: '0', name: 'INT', selected: false },
  { _id: '1', name: 'EXT', selected: false },
  { _id: '2', name: 'I/E', selected: false },
]

export function BreakdownFieldIe(): JSX.Element {
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
    <Form.Group id='breakdown-field-ie' controlId='ie'>
      <BreakdownLabel>{t('INT/EXT')}</BreakdownLabel>
      <AutoInputSelect 
        callback={handleUpdate} 
        selectOnFocus
        list={list} 
        size='sm'
        value={list[0].name} 
      />
    </Form.Group>
  )
}
