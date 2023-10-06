import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonPageNav } from 'common'

type Props = {
  className?: string;
}

export function UserMenuBarButtonRemove({ className }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <ButtonPageNav variant='info' size='sm' onClick={handleClick}>{t('Remove from Current Project')}</ButtonPageNav>
  )
}
