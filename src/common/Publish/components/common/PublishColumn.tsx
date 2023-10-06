import { ReactNode } from 'react'
import Col from 'react-bootstrap/Col'

type Props = {
  children: ReactNode
}

export function PublishColumn({ children }: Props): JSX.Element {
  return (
    <Col md={6} className='d-flex flex-column gap-3'>
      {children}
    </Col>
  )
}
