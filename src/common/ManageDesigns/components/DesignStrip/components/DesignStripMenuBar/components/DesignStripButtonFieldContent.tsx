import { useTranslation } from 'react-i18next'
import Form from 'react-bootstrap/Form'

import { AutoInput, DropdownTC } from 'common'

const types = [
  { eventKey: '0', value: 'Set' },
  { eventKey: '1', value: 'INT/EXT' },
  { eventKey: '2', value: 'Day/Night' },
  { eventKey: '3', value: 'Script Day' },
  { eventKey: '4', value: 'Unit' },
  { eventKey: '5', value: 'Sequence' },
  { eventKey: '6', value: 'Location' },
  { eventKey: '7', value: 'Scene Number' },
  { eventKey: '8', value: 'Description' },
  { eventKey: '9', value: 'Pages' },
  { eventKey: '10', value: 'Script Page' },
  { eventKey: '11', value: 'Duration' },
  { eventKey: '12', value: 'Comments' },
  { eventKey: '13', value: 'Shoot Day Number' },
  { eventKey: '14', value: 'Shoot Date' },
]

export function DesignStripButtonFieldContent(): JSX.Element {
  const { t } = useTranslation()

  function handleTextBefore(val: string|null) {
    console.log(val)
  }
  function handleSelectField(val: string|null) {
    console.log(val)
  }
  function handleTextAfter(val: string|null) {
    console.log(val)
  }
  
  return (
    <>
      <Form.Label className='my-auto ms-3'>Content:</Form.Label>
      <AutoInput 
        callback={handleTextBefore}
        className='text-end me-n1 rounded-start'
        disabled={false}
        placeholder={t('Text before')}
        style={{ width: '7em', borderRadius: '0' }}
        size='sm'
        value=''
      />
      <DropdownTC 
        callback={handleSelectField}
        className='me-n1'
        items={types}
        selectedItem={types[0]}
        size='sm'
        style={{ width: '12em', borderRadius: '0' }}
        toggleClassName='rounded-0'
        variant='light'
      />
      <AutoInput 
        callback={handleTextAfter}
        className='rounded-end'
        disabled={false}
        placeholder={t('Text after')}
        style={{ width: '7em', borderRadius: '0' }}
        size='sm'
        value=''
      />
    </>
  )
}
