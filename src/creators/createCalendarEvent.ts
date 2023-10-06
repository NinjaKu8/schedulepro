import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ICalendarEvent {
  _id: string;
  isStart: boolean;
  isDayOff: boolean;
  isHoliday: boolean;
  calendarEventTypeId: string|null;
  date: string;
  modified: string;
  __v: number;
}
interface Props extends Partial<ICalendarEvent> {}

export function createCalendarEvent(obj: Props): ICalendarEvent {
  const objClean = _.pick(obj, ['_id', 'isStart', 'isDayOff', 'isHoliday', 'calendarEventTypeId', 'date', 'modified', '__v'])
  return {
    _id: createObjectId(),
    isStart: false,
    isDayOff: false,
    isHoliday: false,
    calendarEventTypeId: null,
    date: dateTimeNow(),
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}