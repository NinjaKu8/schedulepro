import { BsCheckLg, BsXLg } from 'react-icons/bs'

import { parseBytes } from 'helpers'

type Props = {
  fileName: string,
  fileSize: number,
  isSuccess: boolean,
  children?: JSX.Element
}

export function DropzoneFileListItem({ fileName, fileSize, isSuccess, children }: Props): JSX.Element {
  const bytes = parseBytes(fileSize)
  return (
    <li className={(`d-flex flex-column gap-2 bg-light rounded shadow-sm p-2 ${isSuccess ? 'text-success' : 'text-danger'}`)}>
      <div className='d-flex gap-2'>
        <div>
          {isSuccess
            ? <BsCheckLg />
            : <BsXLg />
          }
        </div>
        <div className='d-flex justify-content-between flex-grow-1'>
          <div>{fileName}</div>
          <div>{bytes}</div>
        </div>
      </div>
      {children}
    </li>
  )
}
