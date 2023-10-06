import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

export function CardHorizontalDescription({ children }: Props): JSX.Element {
  return (
    <div className='card-horizontal__description text-wrap text-break overflow-hidden small'>
      {children}
    </div>
  )
}
