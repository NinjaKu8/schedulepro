import { useTranslation } from 'react-i18next'

import { ProfilePrefItem } from './index'
import { LanguageDropdown } from 'common'

export function ProfilePrefLanguage(): JSX.Element {
  const { t } = useTranslation()
  return (
    <ProfilePrefItem text={t('Language')}>
      <LanguageDropdown className='bg-light border border-2 rounded' />
    </ProfilePrefItem>
  )
}
