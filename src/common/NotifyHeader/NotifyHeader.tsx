import { useTranslation } from 'react-i18next'

export function NotifyHeader({ text }: { text: string }): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <div className='me-auto'><strong>{text}</strong></div>
      <div className='small'>{t('Just now')}</div>
    </>
  )
}
