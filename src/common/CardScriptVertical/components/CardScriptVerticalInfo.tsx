import { useTranslation } from 'react-i18next'

import { CardVerticalInfo } from 'common'
import { dateFormat } from 'helpers'

type Props = {
  color: string;
  scriptId: string;
}

const hasPermission = true
const script = {
  _created: "2019-06-12T16:07:10.686+0000"
}

export function CardScriptVerticalInfo ({ color, scriptId }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <CardVerticalInfo 
      managerName='manageScript'
      color={color}
      isManage={hasPermission} 
      text={`${t('Uploaded')} ${dateFormat(script._created, 'MM/dd/yy')}`}
    />
  )
}
