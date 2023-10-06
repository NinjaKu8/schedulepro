import { useTranslation } from 'react-i18next'

import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { ButtonPageNav } from 'common'

type Props = {
  className?: string;
}

export function ProjectMenuBarButtonNew({ className }: Props): JSX.Element {
  const toggle = useDispatchUpdateOffcanvasComponent('newProject')
  const { t } = useTranslation()

  return (
      <ButtonPageNav variant='success' size='sm' onClick={toggle}>{t('New Project')}</ButtonPageNav>
  )
}
