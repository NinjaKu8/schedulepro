import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface IElement {
  _id: string;
  name: string;
  elementNumber: string|null;
  isLocked: boolean;
  isInclude: boolean;
  isHold: boolean;
  isDrop: boolean;
  dropDays: number;
  linkIds: string[];
  calendarEventIds: string[];
  daysOff: number[];
  paletteCoord: number | null;
  modified: string;
  __v: number;
}
interface Props extends Partial<IElement> {}

export function createElement(obj: Props): IElement {
  const objClean = _.pick(obj, ['_id', 'name', 'elementNumber', 'isLocked', 'isInclude', 'isHold', 'isDrop', 'dropDays', 'linkIds', 'calendarEventIds', 'daysOff', 'paletteCoord', 'modified', '__v'])
  return {
    _id : createObjectId(),
    name: 'Element',
    elementNumber: null,
    isLocked: false,
    isInclude: true,
    isHold: false,
    isDrop: false,
    dropDays: 10,
    linkIds: [],
    calendarEventIds: [],
    daysOff: [],
    paletteCoord: null,
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}