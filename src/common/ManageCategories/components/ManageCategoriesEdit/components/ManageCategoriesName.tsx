import { useTranslation } from 'react-i18next'

import { AutoInput } from "common"

export function ManageCategoriesName(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <p className='lead mb-2'>{t('Name')}</p>
      <AutoInput value='Cast' callback={()=>{}} size='lg' />
    </div>
  )
}
