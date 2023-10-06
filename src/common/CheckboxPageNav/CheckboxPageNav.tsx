import { useId } from 'react'
import Form from 'react-bootstrap/Form'

type Props = {
  callback: () => void;
  [x: string]: any;
}

export function CheckboxPageNav({ callback, ...rest }: Props): JSX.Element {
  const id = useId()
  return (
    <Form.Group className='d-flex justify-content-center my-lg-auto me-3 py-2 py-sm-0' controlId={id} {...rest}>
      <Form.Check type='checkbox' onClick={callback} />
    </Form.Group>
  )
}
