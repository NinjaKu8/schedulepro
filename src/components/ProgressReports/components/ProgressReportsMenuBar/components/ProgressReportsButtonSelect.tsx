import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonPageNav } from 'common'
import { useAppDispatch } from 'store/hooks'
import { toggleIsCardsSelect } from 'store/slices/local'

export function ProgressReportsButtonSelect(): JSX.Element {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleToggleSelect = useCallback((): void => {
    dispatch(toggleIsCardsSelect())
  },[dispatch])

  return (
    <ButtonPageNav variant='info' size='sm' onClick={handleToggleSelect}>{t('Select')}</ButtonPageNav>
  )
}
