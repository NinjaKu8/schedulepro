import { MdError } from 'react-icons/md'

export function NotifyBodyError({ text }: { text: string }): JSX.Element {
  return (
    <div className='d-flex gap-3'>
      <MdError className='text-danger fs-1' />
      <div>{text}</div>
    </div>
  )
}
