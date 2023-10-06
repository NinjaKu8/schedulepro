import { ReactNode } from 'react'
import { NavSimple } from "common"


type Props = {
  children?: ReactNode;
}

export function ManagerListHeader({ children }: Props): JSX.Element {
  return (
    <NavSimple className='flex-shrink-0 p-2 rounded mb-2'>
      <div className='d-flex w-100'>
        {children}
      </div>
    </NavSimple>
  )
}
