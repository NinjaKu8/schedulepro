import { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

const zooms = [
  { id: '1', name: '100%' },
  { id: '2', name: '200%' },
  { id: '3', name: '300%' },
  { id: '4', name: '400%' },
]

export function DesignStripButtonZoom(): JSX.Element {
  const [ zoom, setZoom ] = useState('1')

  function handleOnChange(val: string) {
    setZoom(val)
  }
  return (
    <Nav.Item>
      <ToggleButtonGroup defaultValue={zoom} name='zoom-toggle-group' size='sm' type='radio' onChange={handleOnChange} >
        {zooms.map(align=>(
          <ToggleButton disabled={false} id={align.id} key={align.id} value={align.id} variant='light'>
            {align.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Nav.Item>
  )
}