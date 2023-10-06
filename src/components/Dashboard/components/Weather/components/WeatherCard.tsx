import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
  className?: string;
}

export function WeatherCard({ children, className }: Props): JSX.Element {
  return (
    <div className={`d-flex rounded shadow overflow-hidden flex-fill ${className}`}>
      {children}
    </div>
  )
}
