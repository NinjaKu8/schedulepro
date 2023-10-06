import Container from 'react-bootstrap/Container'
import { Trans } from 'react-i18next'
import { Accept, FileRejection } from 'react-dropzone'

import { Dropzone, DropzoneFileList } from 'common'

type Props = {
  callback: (acceptedFiles: File[], fileRejections: FileRejection[]) => void;
  clear: () => void;
  acceptedFiles: File[];
  fileRejections: FileRejection[];
}

const accept: Accept = { 'application/pdf': ['.pdf'], 'application/xml': ['.fdx'] }

export function ManageScriptNew({ acceptedFiles, callback, clear, fileRejections }: Props): JSX.Element {
  return (
    <Container className='d-flex flex-column h-100 gap-2'>
      <div>
        <p>
          <Trans i18nKey='uploadscript-instructions1'>
            You can upload your scripts into Think Crew. Once uploaded, you'll be able to break down the elements in those scripts and import them into your schedules.
          </Trans>
        </p>
        <p>
          <Trans i18nKey='uploadscript-instructions2'>
            We currently support the following file types:
          </Trans>
        </p>
        <ul>
          <li>PDF</li>
          <li>Final Draft (.fdx)</li>
        </ul>
        <p>
          <Trans i18nKey='uploadscript-instructions3'>
            Files must be less than 5MB in size. You can upload up to 10 files at a time.
          </Trans>
        </p>
      </div>
      <DropzoneFileList acceptedFiles={acceptedFiles} clear={clear} fileRejections={fileRejections} />  
      <Dropzone
        accept={accept}
        callback={callback}
        className='flex-fill'
        multiple
        maxSize={5000000}
      />
    </Container>
  )
}
