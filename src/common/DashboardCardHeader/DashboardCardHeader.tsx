import { ReactNode } from 'react'

type Props = {
  left: ReactNode;
  right?: ReactNode;
}

export function DashboardCardHeader({ left, right }: Props): JSX.Element {
  return (
    <div className='d-flex mx-3 justify-content-between'>
      <h5>{left}</h5>
      <h5>{right}</h5> 
    </div>
  )
}
