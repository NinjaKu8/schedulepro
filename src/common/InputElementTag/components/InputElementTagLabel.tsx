import { ReactNode } from 'react'
import Form from 'react-bootstrap/Form'

type Props = {
  children: ReactNode;
}

export function InputElementTagLabel({ children }: Props): JSX.Element {
  return (
    <Form.Label className='align-self-center mb-0 text-muted'>{children}</Form.Label>
  )
}
