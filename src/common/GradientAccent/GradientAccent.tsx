import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
  className?: string;
}

export function GradientAccent({ children, className }: Props): JSX.Element {
  return (
    <div className={`d-flex align-items-start pb-2 gradient-background overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
