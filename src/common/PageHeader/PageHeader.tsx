import { ReactNode } from 'react'

type Props = {
  children?: ReactNode;
  className?: string;
  [x: string]: any;
}

export function PageHeader({ children, className, ...rest }: Props): JSX.Element {
  return (
    <h1 className={`display-6 m-0 ${className}`} {...rest}>
      {children}
    </h1>
  )
}
