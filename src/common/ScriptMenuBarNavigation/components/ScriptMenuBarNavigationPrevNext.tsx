import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { getNextItemInArray, getPreviousItemInArray } from 'helpers'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setScr_currentSceneId } from 'store/slices/local'

type Props = {
  direction: string;
}

export function ScriptMenuBarNavigationPrevNext({ direction }: Props): JSX.Element {
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const scr_currentSceneId = useAppSelector(state=>state.local.scr_currentSceneId)
  const scenesOrdered = useAppSelector(state=>state.local.temp_scripts.scenesOrdered) as string[]
  const dispatch = useAppDispatch()

  const disabled = isScriptEdit || (direction==='left' ? scr_currentSceneId===scenesOrdered[0] : scr_currentSceneId===scenesOrdered[scenesOrdered.length-1])

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault()
    let newSceneId
    if(direction==='left') {
      newSceneId = getPreviousItemInArray({ arr: scenesOrdered, currentItem: scr_currentSceneId })
    } else if(direction==='right') {
      newSceneId = getNextItemInArray({ arr: scenesOrdered, currentItem: scr_currentSceneId })
    }
    if(newSceneId) dispatch(setScr_currentSceneId(newSceneId))
  },[direction, dispatch, scenesOrdered, scr_currentSceneId])

  return (
    <Button 
      disabled={disabled}
      onClick={handleClick}
      variant='info' 
      size='sm'
    >
      {direction === 'left'
        ? <FaArrowLeft />
        : <FaArrowRight />
      }
    </Button>
  )
}