import Nav from 'react-bootstrap/Nav'

import { ToggleView, NavSimple } from 'common'
import { ScriptsMenuBarButtonUpload, ScriptsMenuBarButtonUpdate, ScriptsMenuBarButtonDelete, ScriptsMenuBarButtonSelect, ScriptsMenuBarButtonMove } from './components'

export function ScriptsMenuBar(): JSX.Element {
  return (
    <NavSimple className='flex-wrap px-3 pb-2 rounded-bottom' variant='pills'>
      <Nav.Item>
        <ScriptsMenuBarButtonUpload />
      </Nav.Item>
      <Nav.Item>
        <ScriptsMenuBarButtonUpdate />
      </Nav.Item>
      <Nav.Item>
        <ScriptsMenuBarButtonMove />
      </Nav.Item>
      <Nav.Item>
        <ScriptsMenuBarButtonDelete />
      </Nav.Item>
      <Nav.Item className='ms-sm-auto'>
        <ScriptsMenuBarButtonSelect />
      </Nav.Item>
      <Nav.Item>
        <ToggleView />
      </Nav.Item>
    </NavSimple>
  )
}
