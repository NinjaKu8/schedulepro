import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Button from 'react-bootstrap/Button'
import { BsBell, BsCheckLg } from 'react-icons/bs'

import { AvatarUser, BadgeWithCount } from 'common'

const dropdownStyle = { width: '20em'}

function Icon(): JSX.Element {
  return (
    <BadgeWithCount count={10}>
      <BsBell className='fs-3 text-dark' />
    </BadgeWithCount>
  )
}

export function NavItemAlerts(): JSX.Element {
  return (
    <Dropdown as={NavItem} className='no-arrow' id="alert-dropdown" align='end' autoClose='outside'>
      <Dropdown.Toggle className='py-2 py-md-1' as={NavLink} size='sm'><Icon /></Dropdown.Toggle>
      <Dropdown.Menu style={dropdownStyle} className='pt-0 overflow-hidden'>
        <Dropdown.Header className='d-flex justify-content-around border-bottom bg-light'>
          <Button variant='info' size='sm' className=''>Mark all as read</Button>
          <Button variant='danger' size='sm' className=''>Delete all alerts</Button>
        </Dropdown.Header>
        <Dropdown.Item as='button' className='border-bottom d-flex align-items-center overflow-hidden py-3'>
          <AvatarUser className='me-2' userId='ABC123' />
          <div className='text-wrap small flex-grow-1 pe-1'>
            <Link to='/user/ABC123'>John Mattingly</Link> invited you to the project <Link to='user/project/ABC123'>It's a Wonderful Life</Link>
          </div>
          <div>
            <BsCheckLg />
          </div>
        </Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  )
}
