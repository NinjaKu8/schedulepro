import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent, useNotify, useUploadState } from 'hooks'
import { OffcanvasTC, NotifyHeader, NotifyBodyError, ManageScriptNew } from 'common'
import { parseScriptImport } from 'helpers'

type ManageFooterProps = {
  handleClickSave: () => void;
  toggle: () => void;
}

function ManageFooter({ handleClickSave, toggle }: ManageFooterProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <Button onClick={handleClickSave} variant='success' className='me-2'>{t('Upload')}</Button>
      <Button onClick={toggle} variant='secondary'>{t('Cancel')}</Button>
    </>
  )
}

export function OffcanvasNewScript(): JSX.Element {
  const { acceptedFiles, fileRejections, handleIncomingFiles, handleClearFiles } = useUploadState()

  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const currentProjectId = 'ABC123' // TODO: get current project id from redux
  const toggle = useDispatchUpdateOffcanvasComponent('newScript')
  const { addNotify } = useNotify()
  const { t } = useTranslation()

  const handleClose = useCallback((): void => {
    handleClearFiles()
    toggle()
  },[handleClearFiles, toggle])

  const handleError = useCallback((e: unknown): void => {
    if(e instanceof Error) addNotify({ title: <NotifyHeader text='Upload Error' />, message: <NotifyBodyError text={e.message} />})
    console.error(e)
  },[addNotify])
  
  const handleClickSave = useCallback(async (): Promise<void> => {
    const parsedScripts = await parseScriptImport({ currentProjectId, files: acceptedFiles, handleError })
    console.log("🚀 ~ file: OffcanvasNewScript.tsx:61 ~ handleClickSave ~ parsedScripts:", parsedScripts)
    toggle()
  },[acceptedFiles, handleError, toggle])

  return (
    <OffcanvasTC 
      show={offcanvasComponent==='newScript'}
      toggle={handleClose} 
      title={t('Upload New Scripts')} 
      showClose={false} 
      footer={<ManageFooter handleClickSave={handleClickSave} toggle={handleClose}/>} 
    >
      <ManageScriptNew 
        callback={handleIncomingFiles} 
        clear={handleClearFiles}
        acceptedFiles={acceptedFiles} 
        fileRejections={fileRejections} 
      />
    </OffcanvasTC>
  )
}
