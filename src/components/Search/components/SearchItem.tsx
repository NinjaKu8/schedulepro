import { ReactNode } from 'react'
import { Badge } from 'react-bootstrap'

type Props = {
  children?: ReactNode;
  color?: string;
  text?: string;
}

const searchItemStyle = { width: '5.5em' }

export function SearchItem({ children, color, text }: Props): JSX.Element {
  return (
    text?.length 
      ? <div className='d-flex align-items-center'>
          <div className='ms-3' style={searchItemStyle}>
            <Badge bg={color} className='d-block'>{text}</Badge>
          </div>
          {children}
        </div>
      : <>{children}</>
  )
}
