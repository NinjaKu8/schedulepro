import { ReactNode } from 'react'
import Card from 'react-bootstrap/Card'

type Props = {
  children: ReactNode;
}

const bodyStyle = {maxHeight: '4.4em'}

export function CardHorizontal({ children }: Props): JSX.Element {
  return (
    <Card.Body className='card-horizontal d-flex gap-3 p-3' style={bodyStyle}>
      {children}
    </Card.Body>
  )
}
