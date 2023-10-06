import { AvatarUser } from 'common'
import { Link } from 'react-router-dom';

type Props = {
  userId: string;
}

const user = {
  _fullname: 'Michael R. Williams',
  position: 'Line Producer',
}

const style = { minWidth: '12em' }

export function AvatarNameTitle({ userId }: Props): JSX.Element {
  return (
    <div className='d-flex h-100' style={style}>
      <AvatarUser userId={userId} className='me-1' link />
      <div className='d-flex flex-column'>
        <div className=''><Link to={`/user/${userId}`}>{user._fullname}</Link></div>
        <div className='d-none d-sm-block text-muted overflow-hidden small'>{user.position}</div>
      </div>
    </div>
  )
}
