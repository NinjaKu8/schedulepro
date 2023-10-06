import { ReactNode } from 'react'
import Nav from 'react-bootstrap/Nav'

type Props = {
  children?: ReactNode;
  className?: string;
  [x: string]: any;
}
export function NavSimple({ children, className, ...rest }: Props): JSX.Element {
  return (
    <Nav as='nav' className={`d-flex align-items-center flex-shrink-0 gap-1 p-1 bg-white shadow-sm ${className}`} {...rest}>
      {children}
    </Nav>
  )
}
