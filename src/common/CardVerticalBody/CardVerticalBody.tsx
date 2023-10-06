import { ReactNode } from 'react'
import Card from 'react-bootstrap/Card'

type Props = {
  children?: ReactNode;
}

const bodyStyle = { width: '20em', height: '16em'}

export function CardVerticalBody({ children }: Props): JSX.Element {
  return (
    <Card.Body className='d-flex flex-column px-4' style={bodyStyle}>
      {children}
    </Card.Body>
  )
}
