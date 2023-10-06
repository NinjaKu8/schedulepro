import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ISchedBoard {
  _id: string;
  isPublished: boolean;
  isRecycle: boolean;
  name: string;
  episode: string|null;
  schedBreakdownsOrdered: string[];
  modified: string;
  __v: number;
}
interface Props extends Partial<ISchedBoard> {}

export function createSchedBoard(obj?: Props): ISchedBoard {
  const objClean = _.pick(obj, ['_id', 'isPublished', 'isRecycle', 'name', 'episode', 'schedBreakdownsOrdered', 'modified', '__v'])
  return {
    _id: createObjectId(),
    isPublished: false,
    isRecycle: false,
    name: 'Board',
    episode: null,
    schedBreakdownsOrdered: [],
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}