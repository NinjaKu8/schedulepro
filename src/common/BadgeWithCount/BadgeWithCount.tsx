import { ReactNode } from 'react'
import Badge from 'react-bootstrap/Badge'

import { formatNumberShort } from 'helpers'

type Props = {
  children: ReactNode;
  className?: string;
  count?: number;
}

export function BadgeWithCount({ children, className, count=0 }: Props): JSX.Element {
  const formattedCount = formatNumberShort(count)
  return (
    <div className={`position-relative ${className}`}>
      {children}
      {count>0 && <Badge className='badge-count position-absolute top-0 start-100 translate-middle bg-danger'>{formattedCount}</Badge>}
    </div>
  )
}
