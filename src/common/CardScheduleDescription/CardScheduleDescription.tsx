import { CardVerticalDescription, CardHorizontalDescription } from 'common'

type Props = {
  isViewCard?: boolean;
  scheduleId: string;
}

const schedule = {
  description: 'This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule This is a description of the schedule '
}

export function CardScheduleDescription({ isViewCard=true, scheduleId }: Props): JSX.Element {
  return (
    isViewCard
      ? <CardVerticalDescription>
          {schedule.description}
        </CardVerticalDescription>
      : <CardHorizontalDescription>
          {schedule.description}
        </CardHorizontalDescription>
  )
}
