import Nav from 'react-bootstrap/Nav'

import { NavSimple } from 'common'
import { UserMenuBarButtonAdd, UserMenuBarButtonDelete, UserMenuBarButtonRemove } from './components'

export function UserMenuBar(): JSX.Element {
  return (
    <NavSimple className='flex-wrap px-3 pb-2 rounded-bottom' variant='pills'>
      <Nav.Item>
        <UserMenuBarButtonAdd />
      </Nav.Item>
      <Nav.Item>
        <UserMenuBarButtonRemove />
      </Nav.Item>
      <Nav.Item>
        <UserMenuBarButtonDelete />
      </Nav.Item>
    </NavSimple>
  )
}
