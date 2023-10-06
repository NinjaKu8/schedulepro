import { BsTypeStrikethrough } from 'react-icons/bs'

import { ScriptSceneEditorMenuNavItem } from './ScriptSceneEditorMenuNavItem'
import { useAppSelector } from 'store/hooks'
import { useIsProseMirrorMarkActive, useProseMirrorToggleMark } from 'hooks'
import { selectScriptSceneByIdIsOmit } from 'store/slices/local'

type Props = {
  scriptSceneId: string;
}

export function ScriptSceneEditorMenuStrikethrough({ scriptSceneId }: Props): JSX.Element {
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const isOmit = useAppSelector(state=>selectScriptSceneByIdIsOmit(state, scriptSceneId))
  const active = useIsProseMirrorMarkActive('strikethrough')
  const onClick = useProseMirrorToggleMark('strikethrough')
  return (
    <ScriptSceneEditorMenuNavItem active={active} callback={onClick} disabled={!isScriptEdit || isOmit} name={<BsTypeStrikethrough />} value='strikethrough' />
  )
}