import { useCallback } from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { PiSquareBold, PiSquaresFourBold, PiSquareSplitHorizontalBold } from 'react-icons/pi'

import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setScriptView } from 'store/slices/local'
import { ScriptView } from 'types/types'

export function ScriptMenuBarToggleView(): JSX.Element {
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const scriptView = useAppSelector(state=>state.local.scriptView)
  const dispatch = useAppDispatch()
  
  const handleOnChange = useCallback((value: ScriptView): void => {
    dispatch(setScriptView(value))
  },[dispatch])

  return (
    <ToggleButtonGroup type="radio" name='toggleView' value={scriptView} defaultValue={scriptView} onChange={handleOnChange}>
      <ToggleButton disabled={isScriptEdit} id="scene" value='scene' size='sm' variant='info'>
        <PiSquareBold />
      </ToggleButton>
      <ToggleButton disabled={isScriptEdit} id="pane" value='pane' size='sm' variant='info'>
        <PiSquareSplitHorizontalBold />
      </ToggleButton>
      <ToggleButton disabled={isScriptEdit} id="script" value='script' size='sm' variant='info'>
        <PiSquaresFourBold />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}