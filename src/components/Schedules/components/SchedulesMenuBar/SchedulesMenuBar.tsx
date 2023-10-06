import Nav from 'react-bootstrap/Nav'

import { ToggleView, NavSimple } from 'common'
import { SchedulesMenuBarButtonNew, SchedulesMenuBarButtonImport, SchedulesMenuBarButtonExport, SchedulesMenuBarButtonCurrent,SchedulesMenuBarButtonDuplicate, SchedulesMenuBarButtonDelete, SchedulesMenuBarButtonSelect, SchedulesMenuBarButtonMove } from './components'

export function SchedulesMenuBar(): JSX.Element {
  return (
    <NavSimple className='flex-wrap px-3 pb-2 rounded-bottom' variant='pills'>
      <Nav.Item>
        <SchedulesMenuBarButtonNew />
      </Nav.Item>
      <Nav.Item>
        <SchedulesMenuBarButtonCurrent />
      </Nav.Item>
      <Nav.Item>
        <SchedulesMenuBarButtonDuplicate />
      </Nav.Item>
      <Nav.Item>
        <SchedulesMenuBarButtonExport />
      </Nav.Item>
      <Nav.Item>
        <SchedulesMenuBarButtonImport />
      </Nav.Item>
      <Nav.Item>
        <SchedulesMenuBarButtonMove />
      </Nav.Item>
      <Nav.Item>
        <SchedulesMenuBarButtonDelete />
      </Nav.Item>
      <Nav.Item className='ms-sm-auto'>
        <SchedulesMenuBarButtonSelect />
      </Nav.Item>
      <Nav.Item>
        <ToggleView />
      </Nav.Item>
    </NavSimple>
  )
}
