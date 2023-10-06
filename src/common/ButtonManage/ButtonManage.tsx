import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { useDispatchUpdateOffcanvasComponent } from 'hooks'

type Props = {
  className?: string;
  color?: string;
  managerName: string;
  [x: string]: any;
}

export function ButtonManage({ color, className, managerName, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleClick = useDispatchUpdateOffcanvasComponent(managerName)
  
  return (
    <Button className={`px-3 ${className}`} variant={color} size='sm' onClick={handleClick} {...rest}>
      {t('Manage')}
    </Button>
  )
}
