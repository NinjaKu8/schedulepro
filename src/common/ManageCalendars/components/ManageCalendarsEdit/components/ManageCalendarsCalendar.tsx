import { useTranslation } from 'react-i18next'

import { Calendar } from "common"

export function ManageCalendarsCalendar(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <p className='lead mb-2'>{t('Calendar')}</p>
      <Calendar />
    </div>
    
  )
}
