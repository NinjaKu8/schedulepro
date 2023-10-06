import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import { FileMenu } from 'common'
import { ScheduleCurrentUsers, ScheduleDropdownDesign, ScheduleDropdownScenario, ScheduleDropdownCalendar, ScheduleDropdownPanes } from './components'

const navStyle = { fontSize: '1em' }

export function ScheduleNavigation(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Navbar className='flex-shrink-0 p-0 rounded-bottom' bg='white' expand='sm' style={navStyle}>
      <Container fluid>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>{t('Menu')}</Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='w-100 pb-1'>
            <FileMenu />
            <div className='d-flex align-items-center gap-1 flex-wrap ms-auto'>
              <ScheduleCurrentUsers />
              <div className="vr mx-2"></div>
              <ScheduleDropdownScenario />
              <ScheduleDropdownCalendar />
              <ScheduleDropdownDesign />
              <ScheduleDropdownPanes />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
