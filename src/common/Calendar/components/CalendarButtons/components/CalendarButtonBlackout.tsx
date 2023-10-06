import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

export function CalendarButtonBlackout(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Button size='sm'>{t('Blackout')}</Button>
  )
}
