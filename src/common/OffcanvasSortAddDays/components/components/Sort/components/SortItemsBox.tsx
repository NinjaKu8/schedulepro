import { ReactNode } from 'react'

type SortBoxProps = {
  children: ReactNode;
  className?: string;
  labelName?: string;
}

const sortBoxStyle = { minHeight: '15em' }

export function SortItemsBox({ children, className, labelName }: SortBoxProps): JSX.Element {
  return (
    <div className={`d-flex flex-column ${className}`}>
      <div>{labelName}</div>
      <div className='d-flex flex-column gap-2 border rounded overflow-hidden' style={sortBoxStyle}>
        {children}
      </div>
    </div>
  )
}
