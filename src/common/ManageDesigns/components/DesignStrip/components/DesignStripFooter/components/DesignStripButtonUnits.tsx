import Form from 'react-bootstrap/Form'
import { DropdownTC } from 'common'

const units = [
  { eventKey: '0', value: 'Inch' },
  { eventKey: '1', value: 'Centimeter' },
  { eventKey: '2', value: 'Pixel' },
]

export function DesignStripButtonUnits(): JSX.Element {

  function handleChangeUnits(val: string|null) {
    console.log('click')
  }
  
  return (
    <>
      <Form.Label className='my-auto ms-3'>Units:</Form.Label>
      <DropdownTC 
        callback={handleChangeUnits}
        items={units}
        selectedItem={units[0]}
        style={{ width: '4em' }}
        variant='light'
        size='sm'
      />
    </>
  )
}
