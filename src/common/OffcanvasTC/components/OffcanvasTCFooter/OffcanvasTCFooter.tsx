import { ReactNode } from 'react'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

type Props = {
  children?: ReactNode;
  showClose?: boolean;
  toggle: () => void;
}

export function OffcanvasTCFooter({ children, showClose=true, toggle }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex justify-content-end p-3 border-top'>
      {children}
      {showClose && <Button className='ms-3' onClick={toggle} variant='secondary'>{t('Close')}</Button>}
    </div>
  )
}
