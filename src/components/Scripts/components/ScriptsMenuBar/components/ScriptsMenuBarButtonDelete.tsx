import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonDelete, ButtonPageNav } from 'common'

type Props = {
  className?: string;
}

export function ScriptsMenuBarButtonDelete({ className }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <ButtonDelete callback={handleClick}>
      <ButtonPageNav variant='danger' size='sm'>{t('Delete')}...</ButtonPageNav>
    </ButtonDelete>
  )
}
