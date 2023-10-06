import { useTranslation } from 'react-i18next'

import { CardVerticalInfo } from 'common'
import { dateFormat } from 'helpers'

type Props = {
  color: string;
  scheduleId: string;
}

const hasPermission = true
const schedule = {
  _created: "2019-06-12T16:07:10.686+0000"
}

export function CardScheduleVerticalInfo({ color, scheduleId }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <CardVerticalInfo 
      managerName='manageSchedule' 
      color={color}
      isManage={hasPermission} 
      text={`${t('Created')} ${dateFormat(schedule._created, 'MM/dd/yy')}`} 
    />
  )
}
