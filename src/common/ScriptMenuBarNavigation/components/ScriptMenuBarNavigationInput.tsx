import { useCallback } from 'react'

import { AutoInput } from 'common'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectBreakdownSceneByCurrentScriptSceneId, selectBreakdownsWithSceneAndScriptSceneIds, setScr_currentSceneId } from 'store/slices/local'

const progressStyles = { width: '6em'}

export function ScriptMenuBarNavigationInput(): JSX.Element {
  const dispatch = useAppDispatch()
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const value = useAppSelector(selectBreakdownSceneByCurrentScriptSceneId)
  const breakdownsWithScenesAndScriptSceneIds = useAppSelector(selectBreakdownsWithSceneAndScriptSceneIds)

  const handleTextChange = useCallback((value: string): void => {
    const scriptSceneId = breakdownsWithScenesAndScriptSceneIds.find(breakdown=>breakdown.scene===value)?.scriptSceneId
    console.log("🚀 ~ file: ScriptMenuBarNavigationInput.tsx:17 ~ handleTextChange ~ scriptSceneId:", scriptSceneId)
    if(scriptSceneId) dispatch(setScr_currentSceneId(scriptSceneId))
  },[breakdownsWithScenesAndScriptSceneIds, dispatch])

  return (
    <AutoInput 
      callback={handleTextChange} 
      className='text-center' 
      disabled={isScriptEdit}
      size='sm' 
      style={progressStyles} 
      value={value ?? ''} 
    />
  )
}