import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonPageNav } from 'common'

export function SchedulesMenuBarButtonExport(): JSX.Element {
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <ButtonPageNav variant='info' size='sm' onClick={handleClick}>{t('Export')}...</ButtonPageNav>
  )
}
