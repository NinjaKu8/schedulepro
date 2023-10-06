import { EditorView } from 'prosemirror-view'
import { useEditorEventCallback } from '@nytimes/react-prosemirror'

import { ScriptSceneEditorMenuNavItem } from './ScriptSceneEditorMenuNavItem'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { useIsProseMirrorMarkActive } from 'hooks'
import { selectScriptSceneByIdIsOmit, setScr_createTagName } from 'store/slices/local'

type Props = {
  scriptSceneId: string;
}

export function ScriptSceneEditorMenuTag({ scriptSceneId }: Props): JSX.Element {
  const dispatch = useAppDispatch()
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const isOmit = useAppSelector(state=>selectScriptSceneByIdIsOmit(state, scriptSceneId))
  const active = useIsProseMirrorMarkActive('element')

  const onClick = useEditorEventCallback((view: EditorView|null): void => {
    const state = view?.state ?? null
    const pm_dispatch = view?.dispatch ?? null
    if(!state || !pm_dispatch) return
    const text = state.doc.cut(state.selection.from, state.selection.to)?.textContent
    if(!text) return
    dispatch(setScr_createTagName(text.trim()))
  })

  return (
    <ScriptSceneEditorMenuNavItem active={active} callback={onClick} disabled={!isScriptEdit || isOmit} name={active ? 'Un-Tag Element' : 'Tag Element'} variant='info' />
  )
}