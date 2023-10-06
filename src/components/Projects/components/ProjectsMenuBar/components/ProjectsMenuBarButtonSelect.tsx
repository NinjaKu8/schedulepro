import { useTranslation } from 'react-i18next'

import { ButtonPageNav } from 'common'
import { useAppDispatch } from 'store/hooks'
import { toggleIsCardsSelect } from 'store/slices/local'

export function ProjectsMenuBarButtonSelect(): JSX.Element {
  const dispatch = useAppDispatch()
  const handleToggleSelect = () => dispatch(toggleIsCardsSelect())
  const { t } = useTranslation()

  return (
    <ButtonPageNav variant='info' size='sm' onClick={handleToggleSelect}>{t('Select')}</ButtonPageNav>
  )
}
