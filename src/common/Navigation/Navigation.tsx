import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import classnames from 'classnames'

import { Breadcrumbs, NavItemAlerts, NavItemSearch, NavItemUser } from './components'
import { usePathArray } from 'hooks'

type Props = {
  children?: ReactNode;
}

const iconStyle = { width: '35px', height: '35px' }
const navigationStyle = { zIndex: 2 }
const flatBottomPaths = ['project','script','schedule','progress']

function needsSubNavigationBar(pathArray: string[]): boolean {
  const lastSegment = pathArray.pop() ?? ''
  const hasNumbers = !!lastSegment?.match(/\d/g)
  return !(hasNumbers || flatBottomPaths.includes(lastSegment))
}

export function Navigation({ children }: Props): JSX.Element {
  const pathArray = usePathArray()
  const roundedBottom = needsSubNavigationBar(pathArray)

  return (
    <div className='flex-shrink-0' style={navigationStyle}>
      <Nav className={classnames('navigation mt-2 d-flex align-items-center justify-content-between py-1 py-md-3 bg-white rounded-top shadow', { 'rounded-bottom': roundedBottom })}>
        <div className='d-flex align-items-center ms-3'>
          <Nav.Item>
            <Nav.Link as={NavLink} end to='/user' className='p-0' >
              <Image src='/assets/img/brand/tc_head_01.svg' style={iconStyle} alt='logo' className='d-none d-md-block' />
            </Nav.Link>
          </Nav.Item>
          <Breadcrumbs />
        </div>
        <div className='d-flex align-items-center gap-5 gap-xl-4 me-3'>
          <Nav.Item><NavItemSearch /></Nav.Item>
          <Nav.Item><NavItemAlerts /></Nav.Item>
          <Nav.Item><NavItemUser /></Nav.Item>
        </div>            
      </Nav>
      {children}
    </div>
  )
}
