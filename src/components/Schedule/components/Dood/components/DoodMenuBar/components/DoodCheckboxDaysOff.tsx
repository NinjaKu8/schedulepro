import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { toggleSch_dood_isShow_daysoff } from 'store/slices/local'
import { Checkbox } from 'common'

export function DoodCheckboxDaysOff(): JSX.Element {
  const { t } = useTranslation()
  
  const isChecked = useAppSelector(state=>state.local.sch_dood_isShow_daysoff)
  const dispatch = useAppDispatch()

  const handleClick = useCallback((): void => {
    dispatch(toggleSch_dood_isShow_daysoff())
  },[dispatch])

  return (
    <Checkbox 
      callback={handleClick} 
      checked={isChecked}
      className='pt-1 mx-2'
      label={t('Days Off')}
    />
  )
}
