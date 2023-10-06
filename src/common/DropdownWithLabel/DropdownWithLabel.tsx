import { ReactNode } from 'react'
import { DropdownTC } from 'common'
import { IDropdownTC } from 'common/DropdownTC/DropdownTC'

interface DropdownWithLabelProps extends IDropdownTC {
  label: ReactNode;
}

export function DropdownWithLabel({ label, ...rest }: DropdownWithLabelProps): JSX.Element {
  return (
    <div>
      <div className='small'>{label}</div>
      <DropdownTC 
        className='d-flex flex-column'
        size='sm'
        {...rest} 
      />
    </div>
  )
}
