import Nav from 'react-bootstrap/Nav'

import { NavSimple, ToggleView } from 'common'
import { ProjectsMenuBarButtonNew, ProjectsMenuBarButtonDelete, ProjectsMenuBarButtonSelect } from './components'

export function ProjectsMenuBar(): JSX.Element {
  return (
    <NavSimple className='flex-wrap px-3 pb-2 rounded-bottom' variant='pills'>
      <Nav.Item>
        <ProjectsMenuBarButtonNew />
      </Nav.Item>
      <Nav.Item>
        <ProjectsMenuBarButtonDelete />
      </Nav.Item>
      <Nav.Item className='ms-sm-auto'>
        <ProjectsMenuBarButtonSelect />
      </Nav.Item>
      <Nav.Item>
        <ToggleView />
      </Nav.Item>
    </NavSimple>
  )
}
