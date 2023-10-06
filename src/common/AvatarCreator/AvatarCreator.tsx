import { Link } from 'react-router-dom';
import { AvatarUser } from 'common'
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  userId: string;
}

export function AvatarCreator({ userId, children }: Props): JSX.Element {
  return (
    <div className='d-flex gap-1'>
      <div>
        <AvatarUser className='me-1' userId={userId} grow={false} link linkTo={`/user/${userId}`} />
      </div>
      <div className='d-flex flex-column'>
        <div className='text-muted small'>
          {children}
        </div>
        <div>
          by <Link to={`/user/${userId}`}>Michael R. Williams</Link>
        </div>
      </div>
    </div>
  )
}
