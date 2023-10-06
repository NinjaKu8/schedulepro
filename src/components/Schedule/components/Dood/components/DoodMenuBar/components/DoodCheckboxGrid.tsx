import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { toggleSch_dood_isShow_grid } from 'store/slices/local'
import { Checkbox } from 'common'

export function DoodCheckboxGrid(): JSX.Element {
  const { t } = useTranslation()
  
  const isChecked = useAppSelector(state=>state.local.sch_dood_isShow_grid)
  const dispatch = useAppDispatch()

  const handleClick = useCallback((): void => {
    dispatch(toggleSch_dood_isShow_grid())
  },[dispatch])

  return (
    <Checkbox 
      callback={handleClick} 
      checked={isChecked}
      className='pt-1 mx-2'
      label={t('Grid lines')}
    />
  )
}
