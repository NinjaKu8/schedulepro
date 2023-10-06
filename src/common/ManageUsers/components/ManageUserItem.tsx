import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

import { AvatarUser, Checkbox, PermissionsDropdown } from 'common'

type Props = {
  name: string;
  userId: string;
  callback: (id: string) => void;
  checked: boolean;
}

export function ManageUserItem({ name, userId, callback, checked }: Props): JSX.Element {

  const handleClickCheckbox = (): void => {
    callback(userId)
  }

  const handleChangePermission = useCallback((value: string): void => {
    console.log(userId, value.toLowerCase())
  },[])

  return (
    <div className='d-flex'>
      <Form.Group className='my-lg-auto me-3'>
        <Checkbox callback={handleClickCheckbox} checked={checked} />
      </Form.Group>
      <div className='me-auto'>
        <AvatarUser className='me-2' userId={userId} link /><Link to={`/user/${userId}`}>{name}</Link>
      </div>
      <PermissionsDropdown callback={handleChangePermission} />
    </div>
  )
}