import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { toggleSch_dood_isShow_solo } from 'store/slices/local'
import { Checkbox } from 'common'

export function DoodCheckboxSolo(): JSX.Element {
  const { t } = useTranslation()
  
  const sch_dood_selectedElementIds = useAppSelector(state=>state.local.sch_dood_selectedElementIds)
  const isChecked = useAppSelector(state=>state.local.sch_dood_isShow_solo)
  const dispatch = useAppDispatch()

  const handleClick = useCallback((): void => {
    dispatch(toggleSch_dood_isShow_solo())
  },[dispatch])

  return (
    <Checkbox 
      callback={handleClick} 
      checked={isChecked}
      className='pt-1 mx-2'
      disabled={sch_dood_selectedElementIds.length===0}
      label={t('Only Selected')}
    />
  )
}
