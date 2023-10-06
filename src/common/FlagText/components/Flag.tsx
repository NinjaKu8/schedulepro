import { ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  children?: ReactNode;
  className?: string;
  isFlagged?: boolean;
  text?: string;
}

export function Flag({ children, className, isFlagged }: Props): JSX.Element {
  return (
    <span className={classnames(className, {'bg-danger rounded px-1 text-light': isFlagged})}>
      {children}
    </span>
  )
}
