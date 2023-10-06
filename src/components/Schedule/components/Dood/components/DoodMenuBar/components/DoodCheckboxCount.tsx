import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { toggleSch_dood_isShow_count } from 'store/slices/local'
import { Checkbox } from 'common'

export function DoodCheckboxCount(): JSX.Element {
  const { t } = useTranslation()
  
  const isChecked = useAppSelector(state=>state.local.sch_dood_isShow_count)
  const dispatch = useAppDispatch()

  const handleClick = useCallback((): void => {
    dispatch(toggleSch_dood_isShow_count())
  },[dispatch])

  return (
    <Checkbox 
      callback={handleClick} 
      checked={isChecked}
      className='pt-1 mx-2'
      label={t('Count')}
    />
  )
}
