import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function PublishSettings({ children }: Props): JSX.Element {
  return (
    <div className='d-flex flex-column gap-4 overflow-auto p-4'>
      {children}
    </div>
  )
}
