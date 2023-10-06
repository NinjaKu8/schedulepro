import { useCallback } from 'react'
import { useDropzone, Accept, FileRejection } from 'react-dropzone'
import { useTranslation } from 'react-i18next'

type Props = {
  accept: Accept;
  callback: (acceptedFiles: File[], fileRejections: FileRejection[]) => void;
  className?: string;
  multiple?: boolean;
  maxSize?: number;
}
type ValidatorResponse = {
  code: string;
  message: string;
}

export function Dropzone({ accept, callback, className, multiple, maxSize }: Props): JSX.Element {
  const { t } = useTranslation()

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]): void => {
    callback(acceptedFiles, fileRejections)    
  }, [callback])

  const validator = useCallback((file: File): ValidatorResponse|null => {
    if(maxSize) {
      return file.size > maxSize
      ? { code: 'size-too-large', message: t('File is larger than 5MB') }
      : null
    }
    return null
  },[t, maxSize])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, validator, multiple, maxSize, maxFiles: 10 })

  return ( 
    <div className={`d-flex justify-content-center align-items-center border border-thick border-dashed rounded pointer ${className}`} {...getRootProps()}>
      <input {...getInputProps()} />
      <div className='text-center'>
        <h3 className='text-secondary'>{t('Drop Files Here')}</h3>
        { !isDragActive &&
          <p className='text-secondary mb-0'>{t('or click to select a file')}</p>
        }
      </div>
    </div>
  )
}
