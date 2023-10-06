
import { ScriptSceneEditorMenuNavItem } from './ScriptSceneEditorMenuNavItem'
import { useAppSelector } from 'store/hooks'
import { useIsProseMirrorNodeActive, useProseMirrorToggleNode } from 'hooks'
import { selectScriptSceneByIdIsOmit } from 'store/slices/local'

type Props = {
  scriptSceneId: string;
}

export function ScriptSceneEditorMenuDialogue({ scriptSceneId }: Props): JSX.Element {
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const isOmit = useAppSelector(state=>selectScriptSceneByIdIsOmit(state, scriptSceneId))
  const active = useIsProseMirrorNodeActive('dialogue')
  const onClick = useProseMirrorToggleNode('dialogue')
  return (
    <ScriptSceneEditorMenuNavItem active={active} callback={onClick} disabled={!isScriptEdit || isOmit} name='Dialog' />
  )
}