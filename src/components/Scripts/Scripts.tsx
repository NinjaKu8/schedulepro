import { useCallback, useEffect } from 'react'

import { Navigation, PageWrapper } from 'common'
import { ScriptsMenuBar, ScriptsTitleBar, ScriptsList } from './components'
import { useAppDispatch } from 'store/hooks'
import { setIsCardsSelect } from 'store/slices/local'

export default function Scripts(): JSX.Element {
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
        <ScriptsMenuBar />
      </Navigation>
      <PageWrapper> 
        <ScriptsTitleBar />
        <ScriptsList />
      </PageWrapper>  
    </div>
  )
}
