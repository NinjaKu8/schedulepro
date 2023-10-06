import { ReactNode } from 'react'

type Props = {
  children?: ReactNode;
}

export function ManagerEdit({ children }: Props): JSX.Element {
  return(
    <div className='d-flex flex-column gap-4 p-3 overflow-auto'>
      {children}
    </div>
  )
}
