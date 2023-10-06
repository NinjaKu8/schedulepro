import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { getNextItemInArray, getPreviousItemInArray } from 'helpers'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setScr_currentSceneId } from 'store/slices/local'

type Props = {
  direction: string;
}

export function ScriptSceneButtonArrow({ direction }: Props): JSX.Element {
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
  },[dispatch, direction, scenesOrdered, scr_currentSceneId])

  return (
    <Button 
      className='rounded-circle' 
      disabled={disabled}
      onClick={handleClick}
      variant='secondary' 
    >
      {direction === 'left'
        ? <BsArrowLeftShort className='text-white fs-1' />
        : <BsArrowRightShort className='text-white fs-1' />
      }
    </Button>
  )
}