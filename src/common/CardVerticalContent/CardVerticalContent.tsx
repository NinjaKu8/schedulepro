import { ReactNode } from 'react'

type Props = {
  children?: ReactNode;
}

export function CardVerticalContent({ children }: Props): JSX.Element {
  return (
    <div className='d-flex flex-column flex-grow-1 align-items-stretch gap-3'>
      {children}
    </div>
  )
}
