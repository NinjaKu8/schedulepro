import { ReactNode } from 'react'
import Card from 'react-bootstrap/Card'

const descriptionStyle = { maxHeight: '5.8em' }

type Props = {
  children: ReactNode;
}

export function CardVerticalDescription({ children }: Props): JSX.Element {
  return (
    <div className='d-flex mb-auto'>
      <Card.Text className='mb-0 overflow-hidden' style={descriptionStyle}>
        {children}
      </Card.Text>
    </div>
  )
}
