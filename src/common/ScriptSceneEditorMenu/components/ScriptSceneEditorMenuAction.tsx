
import { ScriptSceneEditorMenuNavItem } from './index'
import { useAppSelector } from 'store/hooks'
import { useIsProseMirrorNodeActive, useProseMirrorToggleNode } from 'hooks'
import { selectScriptSceneByIdIsOmit } from 'store/slices/local'

type Props = {
  scriptSceneId: string;
}

export function ScriptSceneEditorMenuAction({ scriptSceneId }: Props): JSX.Element {
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const isOmit = useAppSelector(state=>selectScriptSceneByIdIsOmit(state, scriptSceneId))
  const active = useIsProseMirrorNodeActive('action')
  const onClick = useProseMirrorToggleNode('action')
  return (
    <ScriptSceneEditorMenuNavItem active={active} callback={onClick} disabled={!isScriptEdit || isOmit} name='Action' />
  )
}