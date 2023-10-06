import { useCallback, useState } from 'react'
import { FileRejection } from 'react-dropzone'

type Return = {
  acceptedFiles: File[];
  fileRejections: FileRejection[];
  handleIncomingFiles: any;
  handleClearFiles: any;
}

export const useUploadState = (): Return => {
  const [ acceptedFiles, setAcceptedFiles ] = useState<File[]>([])
  const [ fileRejections, setFileRejections ] = useState<FileRejection[]>([])

  const handleIncomingFiles = useCallback((newFiles: File[], newFileRejections: FileRejection[]): void => {
    setAcceptedFiles((acceptedFiles)=>[...acceptedFiles, ...newFiles])
    setFileRejections((fileRejections)=>[...fileRejections, ...newFileRejections])
  },[setAcceptedFiles, setFileRejections])

  const handleClearFiles = useCallback((): void => {
    setAcceptedFiles([])
    setFileRejections([])
  },[setAcceptedFiles, setFileRejections])

  return { acceptedFiles, fileRejections, handleIncomingFiles, handleClearFiles }
}