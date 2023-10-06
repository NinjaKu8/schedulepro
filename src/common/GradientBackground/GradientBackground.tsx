import { ReactNode } from 'react'

type Props = {
  children?: ReactNode;
  className?: string;
}

export function GradientBackground({ children, className }: Props): JSX.Element {
  return (
    <div className={`gradient-background ${className}`}>
      {children}
    </div>
  )
}
