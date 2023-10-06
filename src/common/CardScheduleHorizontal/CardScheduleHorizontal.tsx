import { CardHorizontal, CardScheduleTitle, CardScheduleDescription, CardScheduleFavorite, CardManage } from 'common'
import { CardScheduleHorizontalCreator } from './components'

type Props = {
  color?: string;
  favorite?: boolean;
  manage?: boolean;
  scheduleId: string;
}

export function CardScheduleHorizontal({ color, favorite=true, scheduleId, manage=true }: Props): JSX.Element {
  return (
    <CardHorizontal>
      <CardScheduleTitle scheduleId={scheduleId} />
      <CardScheduleDescription scheduleId={scheduleId} isViewCard={false} />
      <CardScheduleHorizontalCreator scheduleId={scheduleId} />
      <CardScheduleFavorite scheduleId={scheduleId} isVisible={favorite} />
      <CardManage isVisible={manage} color={color} managerName='manageSchedule' />
    </CardHorizontal>
  )
}
