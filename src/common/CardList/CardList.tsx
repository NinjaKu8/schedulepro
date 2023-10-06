import { ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  children?: ReactNode;
  isViewCard: boolean;
}

export function CardList({ children, isViewCard }: Props): JSX.Element {
  return (
    <div className={classnames('d-flex justify-content-center', {
      'flex-wrap': isViewCard, 
      'flex-column': !isViewCard, 
      'gap-4': isViewCard, 
      'gap-2': !isViewCard,
      'px-lg-5': !isViewCard,
    })}>
      {children}
    </div>
  )
}
