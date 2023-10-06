import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setScr_currentSceneId } from 'store/slices/local'

export function ScriptMenuBarNavigationSlider(): JSX.Element {
  const dispatch = useAppDispatch()
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const scenesOrdered = useAppSelector(state=>state.local.temp_scripts.scenesOrdered) as string[]
  const value = useAppSelector(state=>state.local.scr_currentSceneId)

  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const index = parseInt(event.target.value) || 0
    dispatch(setScr_currentSceneId(scenesOrdered[index]))
  },[dispatch, scenesOrdered])

  return (
    <div className='d-flex align-items-center flex-fill'>
      <Form.Range 
        disabled={isScriptEdit}
        onChange={handleOnChange} 
        value={scenesOrdered.indexOf(value)} 
        min={0} 
        max={scenesOrdered?.length-1}
        step={1}
        list='markers'
      />
    </div>
  )
}