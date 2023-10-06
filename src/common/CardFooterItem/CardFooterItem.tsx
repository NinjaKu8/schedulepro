import { ReactNode } from 'react'

type CardFooterItemProps = {
  color?: string;
  title: ReactNode;
  text: ReactNode;
}

export function CardFooterItem({ title, text, color }: CardFooterItemProps): JSX.Element {
  return (
    <div className='d-flex flex-column align-items-center gap-1'>
      <h3 className={`mb-0 text-${color}`}>{text}</h3>
      <div className='small'>{title}</div>
    </div>
  )
}
