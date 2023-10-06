import { useCallback, useEffect } from 'react'

import { Navigation, PageWrapper } from 'common'
import { ProjectsMenuBar, ProjectsList, ProjectsTitleBar } from './components'
import { useAppDispatch } from 'store/hooks'
import { setIsCardsSelect } from 'store/slices/local'

export default function Projects(): JSX.Element {
  const dispatch = useAppDispatch()
  const handleSetSelect = useCallback((bool: boolean) => dispatch(setIsCardsSelect(bool)),[dispatch]) 

  useEffect((): ()=>void => {
    return () => handleSetSelect(false) // reset select 
  },[handleSetSelect])

  return (
    <div className='d-flex flex-column h-100'>
      <Navigation>
        <ProjectsMenuBar />
      </Navigation>
      <PageWrapper> 
        <ProjectsTitleBar />
        <ProjectsList />
      </PageWrapper> 
    </div>
  )
}
