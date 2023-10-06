import { ReactNode } from 'react'
import Form from 'react-bootstrap/Form'

export function ProfilePrefItem({ children, text }: { children: ReactNode; text: string; }): JSX.Element {
  return (
    <Form.Group className="d-flex align-items-center mb-3">
      <Form.Label className='me-auto mb-0'>{text}</Form.Label>
      {children}
    </Form.Group>
  )
}
