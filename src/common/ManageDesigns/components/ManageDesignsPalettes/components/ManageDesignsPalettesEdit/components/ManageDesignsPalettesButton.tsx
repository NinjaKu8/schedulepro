import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

export function ManageDesignsPalettesButton(): JSX.Element {
  const { t } = useTranslation()

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    
  }

  return (
    <div>
      <p className='lead mb-2'>{t('Edit')}</p>
      <div className='mx-4'>
        <Button size='sm' onClick={handleOnClick}>{t('Edit this palette design')}</Button>
      </div>
    </div>
  )
}
