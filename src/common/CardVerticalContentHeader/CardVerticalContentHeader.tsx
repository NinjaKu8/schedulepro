import { ReactNode } from 'react'

type Props = {
  children?: ReactNode;
}

export function CardVerticalContentHeader({ children }: Props): JSX.Element {
  return (
    <div className='d-flex align-items-center w-100 gap-2'>
      {children}
    </div>
  )
}
