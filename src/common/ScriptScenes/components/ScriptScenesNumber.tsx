
import { AutoInput } from 'common/AutoInput'
import { useCallback } from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectBreakdownSceneByScriptSceneId, selectIsScriptScenesEditId, setScriptScenesEditId } from 'store/slices/local'

type Props = {
  scriptSceneId: string;
}

export function ScriptScenesNumber({ scriptSceneId }: Props): JSX.Element {
  const dispatch = useAppDispatch()
  const sceneNumber = useAppSelector(state=>selectBreakdownSceneByScriptSceneId(state,scriptSceneId))
  const isScriptScenesEditId = useAppSelector(state=>selectIsScriptScenesEditId(state,scriptSceneId))

  const handleSceneNumberUpdate = useCallback((value: string): void => {
    console.log('update scene number', value)
    dispatch(setScriptScenesEditId(null))
  },[dispatch])

  const handleSceneNumberClick = useCallback((): void => {
    dispatch(setScriptScenesEditId(scriptSceneId))
  },[dispatch, scriptSceneId])

  return (  
    <div className='script-scenes-page-scene-number position-absolute mt-1 px-1 w-100 text-center'>
      {isScriptScenesEditId
        ? <AutoInput className='border-primary text-center' size='sm' value={sceneNumber} callback={handleSceneNumberUpdate} selectOnFocus autoFocus />
        : <p className='border-transparent fs-5 mb-0' onClick={handleSceneNumberClick}>{sceneNumber}</p>
      }
    </div>
  )
}