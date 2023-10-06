import { useTranslation } from 'react-i18next'

import { CardFooterItem } from "common"

type Props = {
  color: string;
  scriptId: string;
}

const script = {
  scenes: '114',
  users: '4',
}

export function CardScriptFooter({ color, scriptId }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex justify-content-evenly'>
      <CardFooterItem title={t('Scenes')} text={script.scenes} color={color} />
      <CardFooterItem title={t('Users')} text={script.users} color={color} />
    </div>
  )
}
