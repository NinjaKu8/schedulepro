import { AvatarUser, CardScheduleDescription, CardScheduleFavorite, CardScheduleFooter, CardScheduleTitle, CardVerticalBody, CardVerticalContent, CardVerticalContentHeader, CardVerticalFooter } from 'common'
import { CardScheduleVerticalInfo } from './components'

type CardScheduleVerticalProps = {
  color: string;
  scheduleId: string;
}

const user = {_id: 'XYZ987'}

export function CardScheduleVertical({ color, scheduleId }: CardScheduleVerticalProps): JSX.Element {
  return (
    <>
      <CardVerticalBody>
        <CardVerticalContent>
          <CardVerticalContentHeader>
            <AvatarUser userId={user._id} size='md' link />
            <CardScheduleTitle scheduleId={scheduleId} />
            <CardScheduleFavorite scheduleId={scheduleId} />
          </CardVerticalContentHeader>
          <CardScheduleDescription scheduleId={scheduleId} />
        </CardVerticalContent>
        <CardScheduleVerticalInfo color={color} scheduleId={scheduleId} />
      </CardVerticalBody>
      <CardVerticalFooter color={color}>
        <CardScheduleFooter color={color} scheduleId={scheduleId} />
      </CardVerticalFooter>
    </>
  )
}
