import { ReactNode } from 'react'
import Card from 'react-bootstrap/Card'

type Props = {
  children: ReactNode;
}

const cardStyle = { width: '18em' }

export function CardSmall({ children }: Props): JSX.Element {
  return (
    <Card className='shadow' style={cardStyle}>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  )
}
