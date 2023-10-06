import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ICalendarEventType {
  _id: string;
  scheduleId: string;
  name: string|null;
  shortName: string|null;
  modified: string;
  __v: number;
}
interface Props extends Partial<ICalendarEventType> {
  scheduleId: string;
}

export function createCalendarEventType(obj: Props): ICalendarEventType {
  const objClean = _.pick(obj, ['_id', 'scheduleId', 'name', 'shortName', 'modified', '__v'])
  return {
    _id: createObjectId(),
    name: null,
    shortName: null,
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}