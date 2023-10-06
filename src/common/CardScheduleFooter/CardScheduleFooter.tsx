import { useTranslation } from 'react-i18next'

import { CardFooterItem } from "common"

type Props = {
  color: string;
  scheduleId: string;
}

const schedule = {
  scripts: '3',
  schedules: '7',
  users: '4',
}

export function CardScheduleFooter({ color, scheduleId }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex justify-content-evenly'>
      <CardFooterItem title={t('Scripts')} text={schedule.scripts} color={color} />
      <CardFooterItem title={t('Users')} text={schedule.schedules} color={color} />
      <CardFooterItem title={t('Boards')} text={schedule.users} color={color} />
    </div>
  )
}
