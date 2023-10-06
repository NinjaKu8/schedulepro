import { ReactNode } from 'react'
import { ButtonManage } from 'common'

type Props = {
  managerName: string;
  color?: string;
  isManage?: boolean;
  text?: ReactNode;
}

export function CardVerticalInfo({ managerName, isManage, text='', color }: Props): JSX.Element {
  return (
    <div className='flex-shrink-0'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='text-muted small'>
          {text}
        </div>
        <div>
          {isManage && 
            <ButtonManage color={color} managerName={managerName} className='text-light' />
          }
        </div>
      </div>
    </div>
  )
}
