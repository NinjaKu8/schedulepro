import Form from 'react-bootstrap/Form'
import { AutoInput, DropdownTC } from 'common'

const types = [
  { eventKey: '0', value: 'Auto' },
  { eventKey: '1', value: 'Custom' },
]

export function DesignStripButtonHeight(): JSX.Element {

  function handleSizing(val: string|null) {
    console.log('click')
  }

  function handleCustomSize(val: string|null) {
    console.log('click')
  }
  
  return (
    <>
      <Form.Label className='my-auto ms-3'>Height:</Form.Label>
      <DropdownTC 
        callback={handleSizing}
        className='me-n1'
        items={types}
        selectedItem={types[0]}
        style={{ width: '4em', borderRadius: '0' }}
        toggleClassName='rounded-start'
        variant='light'
        size='sm'
      />
      <AutoInput 
        callback={handleCustomSize}
        className='text-center rounded-end'
        disabled={false}
        style={{ width: '4em', borderRadius: '0' }}
        size='sm'
        value='50'
      />
      <Form.Label className='my-auto me-2'>pixels</Form.Label>
    </>
  )
}
