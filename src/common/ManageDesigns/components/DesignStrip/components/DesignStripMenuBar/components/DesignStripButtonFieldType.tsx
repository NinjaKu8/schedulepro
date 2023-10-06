import Form from 'react-bootstrap/Form'
import { DropdownTC } from 'common'

const types = [
  { eventKey: '0', value: 'Breakdown Field' },
  { eventKey: '1', value: 'Category Columns' },
  { eventKey: '2', value: 'Element List' },
  { eventKey: '3', value: 'Element Count' },
]

export function DesignStripButtonFieldType(): JSX.Element {

  function handleClick(val: string|null) {
    console.log('click')
  }
  
  return (
    <>
      <Form.Label className='my-auto ms-3'>Type:</Form.Label>
      <DropdownTC 
        callback={handleClick}
        items={types}
        selectedItem={types[0]}
        variant='light'
        size='sm'
      />
    </>
  )
}
