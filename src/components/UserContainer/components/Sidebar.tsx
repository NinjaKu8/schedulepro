import { ReactNode, useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { IoHomeOutline } from 'react-icons/io5'
import { BsCaretRightFill } from "react-icons/bs"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { toggleIsSidebarWide } from 'store/slices/local'
import { getDropdownItemByEventKey } from 'helpers'
import { IDropdownTC, IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { IconProject, IconSchedule, IconScript, IconProgressReport } from 'common'

const toggleStyle = { zIndex: 3 }
const chooserStyle = { right: 0 }
const navLinkStyle = { paddingLeft: '.8em' }

const projectItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'Its a Wonderful Life'},
  { eventKey: '2', value: 'Casablanca'},
  { eventKey: '3', value: 'Gone With the Wind'},
  { eventKey: '4', value: 'Citizen Kane'},
]
const scriptItems: IDropdownTCItem[] = [
  { eventKey: '/user/script/ABC123', value: 'Script 1'},
  { eventKey: '/user/script/123ABC', value: 'Script 2'},
  { eventKey: '/user/script/ZYX321', value: 'Script 3'},
  { eventKey: '/user/script/XYZ987', value: 'Script 4'},
]
const scheduleItems: IDropdownTCItem[] = [
  { eventKey: '/user/schedule/ABC123', value: 'Schedule 1'},
  { eventKey: '/user/schedule/123ABC', value: 'Schedule 2'},
  { eventKey: '/user/schedule/ZYX321', value: 'Schedule 3'},
  { eventKey: '/user/schedule/XYZ987', value: 'Schedule 4'},
]

function Chooser({ callback, items, selectedItem }: IDropdownTC): JSX.Element {
  return (
    <Dropdown 
      className='d-flex flex-column justify-content-center no-arrow sidebar-dropdown m-0' 
      drop='end' 
      onSelect={callback} 
      style={chooserStyle}
    >
      <Dropdown.Toggle className='p-0 text-light opacity-50 foo'><BsCaretRightFill /></Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item,i)=>(
          <Dropdown.Item
            active={selectedItem?.eventKey===item.eventKey}
            eventKey={item.eventKey}
            key={i}
          >
            {item.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

type SidebarItemProps = {
  children: ReactNode;
  isSidebarWide: boolean;
  text: string;
}

function SidebarItem({ children, isSidebarWide, text }: SidebarItemProps): JSX.Element {
  return (
    <div className='position-absolute overflow-hidden d-flex my-n2'>
      {children}
      <div className={classnames('ms-2',{'opacity-0': !isSidebarWide, 'opacity-100': isSidebarWide})}>{text}</div>
    </div>
  )
}

export function Sidebar(): JSX.Element {
  const isSidebarWide = useAppSelector(state=>state.local.isSidebarWide)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleToggleSidebar = useCallback((): void => {
    dispatch(toggleIsSidebarWide())
  },[dispatch])

  const handleChangeProject = useCallback((e: string | null): void => {
    if(e) console.log('change project to', e)
  },[])

  const handleNavigate = useCallback((e: string | null): void => {
    if(e) navigate(e)
  },[navigate])

  return (
    <div className={classnames('sidebar d-flex flex-column bg-dark text-light rounded shadow ms-2 my-2')}>
      <div className='flex-grow-1'>
        <Navbar collapseOnSelect expand="md">
          <Container fluid className='d-flex flex-column p-0 pt-2'>

            <Navbar.Toggle aria-controls="sidebar-nav" style={toggleStyle} />

            <Navbar.Offcanvas className='sidebar-offcanvas' id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="start">

              <Offcanvas.Body className='bg-dark'>
                <Nav className="d-block mt-1">

                  {/* 
                      Nav.Link have 'eventKey' only because 'collapseOnSelect' requires them to work 
                      Nav.Link active={false} forces reset which react-bootstrap can sometimes interfere with. React Router will set it again after initialization 
                  */}

                  <Nav.Item>
                    <Nav.Link 
                      as={NavLink} 
                      className={classnames('d-flex align-content-center text-light ms-3 my-2 py-3 rounded-pill overflow-hidden', {'wide': isSidebarWide, 'narrow': !isSidebarWide})}
                      end 
                      eventKey="1" 
                      to='/user' 
                      style={navLinkStyle}
                      active={false}
                    >
                      <SidebarItem text={t('Dashboard')} isSidebarWide={isSidebarWide}>
                        <IoHomeOutline />
                      </SidebarItem>
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item className='d-flex justify-content-between'>
                    <Nav.Link 
                      as={NavLink} 
                      className={classnames('d-flex align-content-center text-light ms-3 my-2 py-3 rounded-pill overflow-hidden', {'wide': isSidebarWide, 'narrow': !isSidebarWide})}
                      eventKey="2" 
                      to='/user/project' 
                      style={navLinkStyle}
                      active={false}
                    >
                      <SidebarItem text={t('Projects')} isSidebarWide={isSidebarWide}>
                        <IconProject />
                      </SidebarItem>
                    </Nav.Link>
                    <Chooser 
                      callback={handleChangeProject} 
                      items={projectItems} 
                      selectedItem={getDropdownItemByEventKey('1',projectItems)} 
                    />
                  </Nav.Item>

                  <Nav.Item className='d-flex justify-content-between'>
                    <Nav.Link 
                      as={NavLink} 
                      className={classnames('d-flex align-content-center text-light ms-3 my-2 py-3 rounded-pill overflow-hidden', {'wide': isSidebarWide, 'narrow': !isSidebarWide})}
                      eventKey="3" 
                      to='/user/script' 
                      style={navLinkStyle}
                      active={false}
                    >
                      <SidebarItem text={t('Scripts')} isSidebarWide={isSidebarWide}>
                        <IconScript isColor/>
                      </SidebarItem>
                    </Nav.Link>
                    <Chooser 
                      callback={handleNavigate} 
                      items={scriptItems} 
                      selectedItem={getDropdownItemByEventKey('1',scriptItems)} 
                    />
                  </Nav.Item>

                  <Nav.Item className='d-flex justify-content-between'>
                    <Nav.Link 
                      as={NavLink} 
                      className={classnames('d-flex align-content-center text-light ms-3 my-2 py-3 rounded-pill overflow-hidden', {'wide': isSidebarWide, 'narrow': !isSidebarWide})}
                      eventKey="4" 
                      to='/user/schedule' 
                      style={navLinkStyle}
                      active={false}
                    >
                      <SidebarItem text={t('Schedules')} isSidebarWide={isSidebarWide}>
                        <IconSchedule isColor />
                      </SidebarItem>
                    </Nav.Link>
                    <Chooser 
                      callback={handleNavigate} 
                      items={scheduleItems} 
                      selectedItem={getDropdownItemByEventKey('1',scheduleItems)} 
                    />
                  </Nav.Item>

                  <Nav.Item className='d-flex justify-content-between'>
                    <Nav.Link 
                      as={NavLink} 
                      className={classnames('d-flex align-content-center text-light ms-3 my-2 py-3 rounded-pill overflow-hidden', {'wide': isSidebarWide, 'narrow': !isSidebarWide})}
                      eventKey="5" 
                      to='/user/progress' 
                      style={navLinkStyle}
                      active={false}
                    >
                      <SidebarItem text={t('Progress Reports')} isSidebarWide={isSidebarWide}>
                        <IconProgressReport isColor />
                      </SidebarItem>
                    </Nav.Link>
                  </Nav.Item>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      
      </div>
      <div className='flex-shrink-0'>
        <Nav className="d-flex flex-column w-100 bg-black bg-opacity-25 rounded-bottom">
          <Nav.Item>
            <Nav.Link onClick={handleToggleSidebar} className='text-light fs-4 opacity-50 py-2 px-4'>
              {isSidebarWide
                ? <div><FaArrowLeft /></div>
                : <div><FaArrowRight /></div>
              }
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  )
}
