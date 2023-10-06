import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BoardsContainer, Navigation, PaneGroups } from 'common'
import { useMediaQuery } from 'hooks'
import { ScheduleNavigation, PaneTabs } from './components'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setIsSidebarWide } from 'store/slices/local'

export default function Schedule(): JSX.Element {
  const isSidebarWide = useAppSelector(state=>state.local.isSidebarWide)
  const dispatch = useAppDispatch()
  
  const isMediaQueryMd = useMediaQuery('(min-width: 768px)') // use PaneGroups on screens larger than md
  const { id } = useParams()
  console.log('scheduleId',id)

  useEffect((): ()=>void => {
    if(isSidebarWide) dispatch(setIsSidebarWide(false))
    return ()=>{
      dispatch(setIsSidebarWide(true))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

	return (
    <div className='schedule d-flex flex-column h-100'>
      <Navigation>
        <ScheduleNavigation />
      </Navigation>
      <BoardsContainer>
        {isMediaQueryMd
          ? <PaneGroups />
          : <PaneTabs />
        }
      </BoardsContainer>
    </div>
	)
}
