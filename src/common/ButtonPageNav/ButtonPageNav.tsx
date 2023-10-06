import { ReactNode } from 'react'

import Button from 'react-bootstrap/Button'

type Props = {
  children: ReactNode;
  [x: string]: any;
}

export function ButtonPageNav({ children, ...rest }: Props): JSX.Element {
  return (
    <Button className='d-block w-100 d-md-inline mb-1 mb-md-0' {...rest}>{children}</Button>
  )
}
