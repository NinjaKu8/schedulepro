import { useTranslation } from 'react-i18next'

import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { ButtonPageNav } from 'common'

export function SchedulesMenuBarButtonImport(): JSX.Element {
  const { t } = useTranslation()
  const toggle = useDispatchUpdateOffcanvasComponent('import')

  return (
    <ButtonPageNav variant='info' size='sm' onClick={toggle}>{t('Import')}...</ButtonPageNav>
  )
}
