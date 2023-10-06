import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent, useNotify, useUploadState } from 'hooks'
import { OffcanvasTC, Import, NotifyHeader, NotifyBodyError } from 'common'
import { getFileExtension, parseUSS } from 'helpers'

type FooterProps = {
  handleClickSave: () => void;
  toggle: () => void;
}

function Footer({ handleClickSave, toggle }: FooterProps) {
  const { t } = useTranslation()
  return (
    <>
      <Button onClick={handleClickSave} variant='success' className='me-2'>{t('Import')}</Button>
      <Button onClick={toggle} variant='secondary'>{t('Cancel')}</Button>
    </>
  )
}

export function OffcanvasImport(): JSX.Element {
  const { acceptedFiles, fileRejections, handleIncomingFiles, handleClearFiles } = useUploadState()

  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('import')
  const { addNotify } = useNotify()
  const { t } = useTranslation()

  const handleClose = useCallback((): void => {
    handleClearFiles()
    toggle()
  },[handleClearFiles, toggle])

  const handleError = useCallback((e: unknown): void => {
    if(e instanceof Error) addNotify({ title: <NotifyHeader text='Import Error' />, message: <NotifyBodyError text={e.message} />})
    console.error(e)
  },[addNotify])
  
  const handleClickSave = useCallback((): void => {
    acceptedFiles.forEach(async (file: File) => {
      let ussImportObjects
      const filename = file.name
      const fileExtension = getFileExtension(filename)
      switch(fileExtension) {
        case 'uss': ussImportObjects = await parseUSS({file, handleError, projectId: 'ABC123' }); break; // TODO: get project ID
        default: ussImportObjects = null
      }
      console.log(filename, ussImportObjects) // TODO: Reminder that ussImportObjects doesn't contain a SchedUserSettings object. Will need to create this from store data and extrapolated info from the imported data.
    })
    toggle()
  },[acceptedFiles, handleError, toggle])

  return (
    <OffcanvasTC
      show={offcanvasComponent==='import'}
      toggle={handleClose}
      title={t('Import')} 
      showClose={false} 
      footer={<Footer handleClickSave={handleClickSave} toggle={handleClose}/>} 
    >
      <Import 
        callback={handleIncomingFiles} 
        clear={handleClearFiles}
        acceptedFiles={acceptedFiles} 
        fileRejections={fileRejections}  
      />
    </OffcanvasTC>
  )
}
