import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { useTranslation } from 'react-i18next'

export function NotifyBodyProjectAdd({ userId, projectId }: { userId: string, projectId: string }): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex flex-column'>
      <Image className='border border-success border-3 me-2' roundedCircle src='/assets/img/avatars/user_04.png' width='35' height='35' alt='user' />
      <div><Link to={`/user/${userId}`}>John Mattingly</Link> {t('added you to the')} <Link to={`/user/project/${projectId}`}>It's a Wonderful Life</Link> {t('project')}</div>
    </div>
  )
}
