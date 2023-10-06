import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'

export function ProfileInfoButtonViewPage(): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleOnClickViewUserPage = useCallback((): void => {
    navigate("/user/ABC123")
  },[navigate])

  return (
    <div className='d-flex flex-row-reverse'>
      <Button size='sm' variant='info' onClick={handleOnClickViewUserPage}>{t('View your public page')}</Button>
    </div>
  )
}
