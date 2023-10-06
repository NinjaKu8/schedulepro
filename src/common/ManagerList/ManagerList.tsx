import { ReactNode } from 'react'

type Props = {
  children?: ReactNode;
}

export function ManagerList({ children }: Props): JSX.Element {
  return(
    <div className='d-flex flex-column h-100 p-3 pb-0'>
      {children}
    </div>
  )
}
