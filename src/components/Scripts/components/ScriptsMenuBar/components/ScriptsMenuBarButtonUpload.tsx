import { useTranslation } from 'react-i18next'

import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { ButtonPageNav } from 'common'

export function ScriptsMenuBarButtonUpload(): JSX.Element {
  const toggle = useDispatchUpdateOffcanvasComponent('newScript')
  const { t } = useTranslation()

  return (
    <ButtonPageNav variant='success' size='sm' onClick={toggle}>{t('Upload')}...</ButtonPageNav>
  )
}
