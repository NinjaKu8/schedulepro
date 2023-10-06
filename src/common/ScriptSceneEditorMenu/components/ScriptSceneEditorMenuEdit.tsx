import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ScriptSceneEditorMenuNavItem } from './ScriptSceneEditorMenuNavItem'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { toggleIsScriptEdit } from 'store/slices/local'

type Props = {
  handleSaveContent: () => void;
  scriptSceneId: string;
}

const editButtonStyle = { width: '4em' }

export function ScriptSceneEditorMenuEdit({ handleSaveContent, scriptSceneId }: Props): JSX.Element {
  const { t } = useTranslation()
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const dispatch = useAppDispatch()

  const handleClick = useCallback((): void => {
    if(isScriptEdit) handleSaveContent() // only save if we're leaving edit mode
    dispatch(toggleIsScriptEdit())
  },[dispatch, handleSaveContent, isScriptEdit])

  return (
    <ScriptSceneEditorMenuNavItem 
      callback={handleClick} 
      className='text-black'
      name={isScriptEdit ? t('Save') : t('Edit')} 
      variant={isScriptEdit ? 'success' : 'info'} 
      style={editButtonStyle} 
    />
  )
}