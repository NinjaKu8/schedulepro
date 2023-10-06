import { ReactNode } from 'react'
import Card from 'react-bootstrap/Card'
import { GradientAccent } from 'common'

export function ContactCard({ title, description, children }: { title: string; description: string; children: ReactNode}): JSX.Element {
  return (
    <GradientAccent className='rounded shadow'>
      <Card className='w-100'>
        <Card.Body className='d-flex flex-column gap-3'>
          <h5>{title}</h5>
          <p>{description}</p>
          {children}
        </Card.Body>
      </Card>
    </GradientAccent>
  )
}
