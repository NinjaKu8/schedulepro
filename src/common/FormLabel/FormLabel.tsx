import Form from 'react-bootstrap/Form'

type Props = {
  className?: string;
  children?: string;
  [x:string]: any;
}

export function FormLabel({ className, children, ...rest }: Props): JSX.Element {
  return (
    <Form.Label className={`text-muted small mb-0 ${className}`} {...rest}>{children}</Form.Label>
  )
}
