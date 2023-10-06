import { ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  className?: string;
  children?: ReactNode;
  isSelected?: boolean;
  [x: string]: any;
}

export function ManagerListItem({ children, className, isSelected, ...rest }: Props): JSX.Element {
  return (
    <div className={classnames('d-flex p-2 rounded-1 w-100 user-select-none', className, isSelected && 'bg-selected')} {...rest}>
      {children}
    </div>
  )
}
