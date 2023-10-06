import { BsTypeUnderline } from 'react-icons/bs'

import { ScriptSceneEditorMenuNavItem } from './ScriptSceneEditorMenuNavItem'
import { useAppSelector } from 'store/hooks'
import { useIsProseMirrorMarkActive, useProseMirrorToggleMark } from 'hooks'
import { selectScriptSceneByIdIsOmit } from 'store/slices/local'

type Props = {
  scriptSceneId: string;
}

export function ScriptSceneEditorMenuUnderline({ scriptSceneId }: Props): JSX.Element {
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const isOmit = useAppSelector(state=>selectScriptSceneByIdIsOmit(state, scriptSceneId))
  const active = useIsProseMirrorMarkActive('underline')
  const onClick = useProseMirrorToggleMark('underline')
  return (
    <ScriptSceneEditorMenuNavItem active={active} callback={onClick} disabled={!isScriptEdit || isOmit} name={<BsTypeUnderline />} value='underline' />
  )
}