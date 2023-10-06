import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

export function CardHorizontalFavorite({ children }: Props): JSX.Element {
  return (
    <div className='ms-auto align-self-center'>
      {children}
    </div>
  )
}
