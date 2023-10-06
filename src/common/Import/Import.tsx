import { Trans } from 'react-i18next'
import Container from 'react-bootstrap/Container'
import { Accept, FileRejection } from 'react-dropzone'

import { Dropzone, DropzoneFileList } from 'common'

type Props = {
  callback: (acceptedFiles: File[], fileRejections: FileRejection[]) => void;
  clear: () => void;
  acceptedFiles: File[];
  fileRejections: FileRejection[];
}

const accept: Accept = { 'text/json': ['.uss'] }

export function Import({ acceptedFiles, callback, clear, fileRejections }: Props): JSX.Element {
  return (
    <Container className='d-flex flex-column h-100 gap-2'>
      <div>
        <p>
          <Trans i18nKey='import-instructions1'>
            You can import schedules from <a href='https://universalschedulestandard.org'>Universal Schedule Standard</a> files (.uss).
          </Trans>
        </p>
        <p>
          <Trans i18nKey='import-instructions3'>
            Files must be less than 1MB in size. You can upload up to 10 files at a time.
          </Trans>
        </p>
      </div>
      <DropzoneFileList acceptedFiles={acceptedFiles} clear={clear} fileRejections={fileRejections} /> 
      <Dropzone
        accept={accept}
        callback={callback}
        className='flex-fill'
        multiple={false}
        maxSize={1000000}
      />
  </Container>
  )
}
