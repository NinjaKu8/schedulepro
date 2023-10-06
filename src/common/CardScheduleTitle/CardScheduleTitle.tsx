
import { CardTitle } from 'common'

type Props = {
  scheduleId: string;
}

const schedule = {
  name: "First Draft",
  season: 'S1 :: E02'
}

export function CardScheduleTitle({ scheduleId }: Props): JSX.Element {
  return (
    <CardTitle 
      title={schedule.name}
      subtitle={schedule.season}
      link={`/user/schedule/${scheduleId}`}
    />
  )
}
