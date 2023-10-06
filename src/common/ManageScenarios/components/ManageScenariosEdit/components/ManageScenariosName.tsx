import { useTranslation } from 'react-i18next'

import { AutoInput } from "common"

export function ManageScenariosName(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <p className='lead mb-2'>{t('Name')}</p>
      <AutoInput value='Working Pink Draft' callback={()=>{}} size='lg' />
    </div>
  )
}
