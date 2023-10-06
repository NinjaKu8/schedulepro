
import { FlagText } from 'common'

export interface IDoodStatus {
  date: Date;
  isStart: boolean;
  isWork: boolean;
  isFinish: boolean;
  isHold: boolean;
  isDrop: boolean;
  isPickup: boolean;
  isStarted: boolean;
  isInDrop: boolean;
  hasWrapped: boolean;
}

type Props = {
  calendarEventsText: string;
  isFlagged: boolean;
  status: IDoodStatus;
  tipText?: string;
}

const schedule = {
  doodStart: 'S',
  doodWork: 'W',
  doodFinish: 'F',
  doodHold: 'H',
  doodDrop: 'D',
  doodPickup: 'P',
}

export function DoodStatus({ calendarEventsText, isFlagged, status, tipText }: Props): JSX.Element {
  let statusText = ''
  if(status.isStart) statusText+= schedule.doodStart
  if(status.isPickup) statusText+= schedule.doodPickup
  if(status.isWork) statusText+= schedule.doodWork
  if(status.isDrop) statusText+= schedule.doodDrop
  if(status.isHold && !calendarEventsText.length) statusText+= schedule.doodHold
  if(calendarEventsText.length>0) statusText+= calendarEventsText
  if(status.isFinish) statusText+= schedule.doodFinish
  if(!statusText.length) statusText = '\u00a0'
  return (
    <FlagText isFlagged={isFlagged && statusText.length>0} tipText={tipText}>
      {statusText}
    </FlagText>
  )
}
