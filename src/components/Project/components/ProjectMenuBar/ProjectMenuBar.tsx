import Nav from 'react-bootstrap/Nav'

import { NavSimple } from 'common'
import { ProjectMenuBarButtonDelete, ProjectMenuBarButtonManage, ProjectMenuBarButtonNew } from './components'

export function ProjectMenuBar(): JSX.Element {
  return (
    <NavSimple className='flex-wrap px-3 pb-2 rounded-bottom' variant='pills'>
      <Nav.Item>
        <ProjectMenuBarButtonNew />
      </Nav.Item>
      <Nav.Item>
        <ProjectMenuBarButtonManage />
      </Nav.Item>
      <Nav.Item>
        <ProjectMenuBarButtonDelete />
      </Nav.Item>
    </NavSimple>  
  )
}
