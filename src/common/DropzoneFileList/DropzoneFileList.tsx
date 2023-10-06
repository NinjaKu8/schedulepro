import { useMemo } from 'react'
import { FileRejection, FileError } from 'react-dropzone'
import Button from 'react-bootstrap/Button'

import { DropzoneFileListItem } from './components'

type Props = {
  acceptedFiles: File[];
  clear: ()=>void;
  fileRejections: FileRejection[];
}

export function DropzoneFileList({ acceptedFiles, clear, fileRejections }: Props): JSX.Element {

  const doesAcceptedFilesHaveDuplicate = useMemo(()=>{
    return acceptedFiles.reduce((acc: boolean, cur: File)=>{
      if(acc) return true
      const acceptedFilesWithCur = acceptedFiles?.filter((file: File)=>file.name===cur.name && file.lastModified===cur.lastModified)
      return acceptedFilesWithCur ? acceptedFilesWithCur.length > 1 : false
    },false)
  },[acceptedFiles]) 
  
  return (
    <div>
      {acceptedFiles.length > 0 &&
        <ul className='d-flex flex-column gap-2 ms-2 list-unstyled mb-2'>
          {acceptedFiles.map((file: File, i) => (
            <DropzoneFileListItem key={i} fileName={file.name} fileSize={file.size} isSuccess={true} />
          ))}
        </ul>
      }
      { fileRejections.length > 0 &&
        <ul className='d-flex flex-column gap-2 ms-2 list-unstyled mb-2'>
          {fileRejections.map(({ file, errors }: FileRejection, i) => (
            <DropzoneFileListItem key={i} fileName={file.name} fileSize={file.size} isSuccess={false}>
              <>
                {errors.map((e: FileError) => (
                  <div key={e.code} className='text-muted'>This file won't be uploaded. {e.message}</div>
                ))}
              </>
            </DropzoneFileListItem>
          ))}
        </ul>
      }
      {(acceptedFiles.length>0 || fileRejections.length>0) && 
        <div className='d-flex justify-content-between align-items-center'>
          <div className='text-muted'>
            {doesAcceptedFilesHaveDuplicate && <div className='text-danger'>Duplicate files detected, consider clearing files and trying again.</div>}
          </div>
          <div>
            <Button size='sm' variant='info' onClick={clear}>Clear Files</Button>
          </div>
        </div>
      }
    </div>
  )
}