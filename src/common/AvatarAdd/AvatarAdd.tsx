import { Avatar } from 'common'
import { useTranslation } from 'react-i18next'

type Props = {
  callback?: (e: React.MouseEvent<HTMLElement>) => void;
  [x: string]: any;
}

export function AvatarAdd({ callback, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <Avatar 
      callback={callback} 
      linkTo=''
      name={t('Add users')} 
      online={false} 
      src='/assets/img/avatars/user_plus.png' 
      {...rest} 
    />
  )
}
