import { useTranslation } from 'react-i18next'

import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { ButtonPageNav } from 'common'

type Props = {
  className?: string;
}

export function ProjectMenuBarButtonManage({ className }: Props): JSX.Element {
  const toggle = useDispatchUpdateOffcanvasComponent('manageProject')
  const { t } = useTranslation()

  return (
    <ButtonPageNav variant='info' size='sm' onClick={toggle}>{t('Manage Project')}</ButtonPageNav>
  )
}
