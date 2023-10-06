import { useTranslation } from 'react-i18next'

import { AutoInput } from "common"

export function ManageCalendarsName(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <p className='lead mb-2'>{t('Name')}</p>
      <AutoInput value='Start in January' callback={()=>{}} size='lg' />
    </div>
  )
}
