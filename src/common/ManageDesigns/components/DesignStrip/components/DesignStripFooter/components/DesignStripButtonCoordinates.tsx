import { AutoInput } from 'common/AutoInput'
import Form from 'react-bootstrap/Form'

type Props = {
  callback: (e: string|null) => void;
  label: string;
  value: string;
}

const coordinateInputStyle = { width: '4em' }

function Coordinate({ callback, label, value }: Props): JSX.Element {
  return (
    <>
      <Form.Label className='my-auto ms-2 me-1'><strong>{label}</strong></Form.Label>
      <AutoInput 
        callback={callback}
        className='text-center'
        disabled={false}
        selectOnFocus={true}
        size='sm'
        style={coordinateInputStyle}
        value={value}
      />
    </>
  )
}

export function DesignStripButtonCoordinates(): JSX.Element {

  function handleCoordW(val: string|null) {
    console.log('W',val)
  }
  function handleCoordH(val: string|null) {
    console.log('H',val)
  }
  function handleCoordX(val: string|null) {
    console.log('X',val)
  }
  function handleCoordY(val: string|null) {
    console.log('Y',val)
  }
  
  return (
    <>
      <Form.Label className='my-auto ms-3'>Coordinates:</Form.Label>
      <Coordinate callback={handleCoordW} label='W' value='30' />
      <Coordinate callback={handleCoordH} label='H' value='30' />
      <Coordinate callback={handleCoordX} label='X' value='30' />
      <Coordinate callback={handleCoordY} label='Y' value='30' />
    </>
  )
}