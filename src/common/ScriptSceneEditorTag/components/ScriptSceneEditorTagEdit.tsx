import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useEditorEventCallback } from '@nytimes/react-prosemirror'
import { toggleMark } from 'prosemirror-commands'
import { EditorView } from 'prosemirror-view'
import Button from 'react-bootstrap/Button'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { updateOffcanvasComponent, setScr_selectedElementId } from 'store/slices/local'

export function ScriptSceneEditorTagEdit(): JSX.Element {
  const dispatch = useAppDispatch()
  const elementId = useAppSelector(state=>state.local.scr_selectedElementId)
  const { t } = useTranslation()

  const handleClickRemove = useEditorEventCallback((view: EditorView|null) => {
    if(!view) return
    // remove element tag
    const pm_state = view?.state ?? null
    const pm_dispatch = view?.dispatch ?? null
    if(!pm_state || !pm_dispatch) return
    toggleMark(pm_state.schema.marks.element)(pm_state, pm_dispatch)
    // reset store
    dispatch(setScr_selectedElementId(null))
  })

  const handleClickManage = useCallback((): void => {
    dispatch(updateOffcanvasComponent('manageElements'))
  },[dispatch])

  return (
    <div className='d-flex flex-column gap-2 p-2'>
      {elementId}
      <div className='d-flex gap-2'>
        <Button size='sm' variant='info' className='flex-fill' onClick={handleClickManage}>{t('Manage')}</Button>
        <Button size='sm' variant='danger' className='flex-fill' onClick={handleClickRemove}>{t('Remove tag')}</Button>
      </div>
    </div>
    
  )
}