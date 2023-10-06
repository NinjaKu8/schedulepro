import { useTranslation } from 'react-i18next'

import { AutoInput } from "common"

export function ManageDesignsStripsName(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <p className='lead mb-2'>{t('Name')}</p>
      <AutoInput value='MW Custom Strip' callback={()=>{}} size='lg' />
    </div>
  )
}
