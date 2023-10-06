import { ReactNode } from 'react'
import Card from 'react-bootstrap/Card'

type Props = {
  children?: ReactNode;
  color?: string;
}

export function CardVerticalFooter({children, color}: Props): JSX.Element {
  return (
    <Card.Footer className={`d-flex flex-column bg-${color}-25 p-3`}>
      {children}
    </Card.Footer>
  )
}
