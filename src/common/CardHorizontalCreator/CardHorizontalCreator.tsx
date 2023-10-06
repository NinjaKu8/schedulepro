import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

const creatorStyle = { minWidth: '15em'}

export function CardHorizontalCreator({ children }: Props): JSX.Element {
  return (
    <div className='card-horizontal__creator overflow-hidden align-self-center' style={creatorStyle}>
      {children}
    </div>
  )
}
