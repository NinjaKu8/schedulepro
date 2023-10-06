import { Link } from 'react-router-dom'

import { ButtonManage } from 'common'

type Props = {
  managerName: string;
  color?: string;
  link: string;
  title: string;
  subtitle?: string;
  showManage?: boolean;
}

export function CardSmallInfo({ link, title, subtitle, showManage, managerName, color }: Props): JSX.Element {
  return (
    <>
      <div className='overflow-hidden mb-2'>
        <Link to={link}>{title}</Link>
      </div>
      <div className='d-flex align-items-center'>
        {subtitle &&
          <div>
            {subtitle}
          </div>
        }
        {showManage &&
          <div className='ms-auto'>
            <ButtonManage managerName={managerName} color={color} />
          </div>
        }
      </div>
    </>
  )
}
