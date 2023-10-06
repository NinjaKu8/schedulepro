import { ReactNode } from "react"
import Form from 'react-bootstrap/Form'

type Props = {
  children: ReactNode;
  className?: string;
}

export function BreakdownLabel({ children, className }: Props): JSX.Element {
  return (
    <Form.Label className={`mb-0 text-muted w-100 ${className}`}>
      {children}
    </Form.Label>
  )
}
