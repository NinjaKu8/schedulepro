import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

export function CalendarButtonStart(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Button size='sm'>{t('Start')}</Button>
  )
}
