import { useTranslation } from 'react-i18next'

import { ManageUsers } from 'common'

export function ManageDesignsPalettesUsers(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <p className='lead mb-2'>{t('Users')}</p>
      <div className='mx-4'>
        <ManageUsers />
      </div>
    </div>
  )
}
