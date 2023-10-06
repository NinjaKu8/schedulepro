import { useTranslation } from 'react-i18next'

import { CardVerticalInfo } from 'common'
import { dateFormat } from 'helpers'

type Props = {
  color: string;
  projectId: string;
}

const hasPermission = true
const project = {
  _created: "2019-06-12T16:07:10.686+0000"
}

export function CardProjectVerticalInfo({ color, projectId }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <CardVerticalInfo managerName='manageProject' isManage={hasPermission} text={`${t('Created')} ${dateFormat(project._created, 'MM/dd/yy')}`} color={color} />
  )
}
