import { NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import NavItem from 'react-bootstrap/NavItem'
import NavLinkBs from 'react-bootstrap/NavLink'
import { useTranslation } from 'react-i18next'

import { AvatarUser } from 'common'

type Props = {
  userId: string
}

function Title({ userId }: Props): JSX.Element {
  return (
    <AvatarUser
      uploadImg="/assets/img/avatars/user_plus.png"
      className="ms-3 ms-md-0"
      userId={userId}
    />
  )
}

export function NavItemUser(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown as={NavItem} className="no-arrow" id="alert-dropdown" align="end">
      <Dropdown.Toggle className="py-2 py-md-0" as={NavLinkBs} size="sm">
        <Title userId="ABC123" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={NavLink} to="/user/ABC123">
          {t('My Page')}
        </Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/user/profile">
          {t('Edit Profile')}
        </Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/user/subscription">
          {t('Subscription')}
        </Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/">
          {t('Log Out')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
