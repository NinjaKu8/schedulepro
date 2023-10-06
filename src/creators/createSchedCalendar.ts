import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ISchedCalendar {
  _id: string;
  name: string;
  calendarEventIds: string[];
  daysOff: number[];
  modified: string;
  __v: number;
}
interface Props extends Partial<ISchedCalendar> {}

export function createSchedCalendar(obj?: Props): ISchedCalendar {
  const objClean = _.pick(obj, ['_id', 'name', 'calendarEventIds', 'daysOff', 'modified', '__v'])
  return {
    _id: createObjectId(),
    name: 'Calendar',
    calendarEventIds: [],
    daysOff: [0,6],
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}