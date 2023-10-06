import { ButtonManage } from 'common'

type Props = {
  isVisible?: boolean;
  color?: string;
  managerName: string;
}

export function CardManage({ isVisible=true, color, managerName }: Props): JSX.Element | null {
  return (
    isVisible
      ? <div className='ms-auto align-self-center'>
          <ButtonManage color={color} managerName={managerName} />
        </div>
      : null
  )
}
