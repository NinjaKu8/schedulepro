import { ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  children?: ReactNode;
  className?: string;
  size?: 'sm'|'md'|'full';
}

const colWidthSmall = { minWidth: '3em', width: '3em' }
const colWidthMedium = { minWidth: '6em', width: '6em' }

export function ManagerListColumn({ children, className, size }: Props): JSX.Element {
  const style = size==='sm'
    ? colWidthSmall
    : size==='md'
      ? colWidthMedium
      : {}
  return (
    <div className={classnames(size==='full' && 'flex-grow-1 text-truncate', className)} style={style}>
      {children}
    </div>
  )
}
