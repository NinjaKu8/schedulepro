
import { useCallback } from 'react'
import { ScriptSceneEditorMenuNavItem } from './ScriptSceneEditorMenuNavItem'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { updateTemp_scriptScenes, selectScriptSceneByIdIsOmit } from 'store/slices/local'

type Props = {
  scriptSceneId: string;
}

export function ScriptSceneEditorMenuOmit({ scriptSceneId }: Props): JSX.Element {
  const dispatch = useAppDispatch()
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const currentSceneId = useAppSelector(state=>state.local.scr_currentSceneId)
  const isOmit = useAppSelector(state=>selectScriptSceneByIdIsOmit(state, scriptSceneId))

  const onClick = useCallback((): void => {
    dispatch(updateTemp_scriptScenes({_id: currentSceneId, isOmit: !isOmit }))
  },[currentSceneId, dispatch, isOmit])

  return (
    <ScriptSceneEditorMenuNavItem active={isOmit} callback={onClick} disabled={!isScriptEdit} name={isOmit ? 'Un-Omit' : 'Omit'} variant='info' />
  )
}