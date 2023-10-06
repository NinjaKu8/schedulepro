import { useCallback, useEffect } from 'react'

import { Navigation, PageWrapper } from 'common'
import { SchedulesList, SchedulesMenuBar, SchedulesTitleBar } from './components'
import { useAppDispatch } from 'store/hooks'
import { setIsCardsSelect } from 'store/slices/local'

export default function Schedules(): JSX.Element {
  const dispatch = useAppDispatch()

  const handleSetSelect = useCallback((bool: boolean): void => {
    dispatch(setIsCardsSelect(bool))
  },[dispatch])

  useEffect((): ()=>void =>{
    return ()=> handleSetSelect(false) // reset select 
  },[handleSetSelect])

  return (
    <div className='d-flex flex-column h-100'>
      <Navigation>
        <SchedulesMenuBar />
      </Navigation>
      <PageWrapper>  
        <SchedulesTitleBar />
        <SchedulesList />
      </PageWrapper>      
    </div>
  )
}
