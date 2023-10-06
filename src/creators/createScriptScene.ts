import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface IScriptScene {
  _id: string;
  isActive: boolean;
  isOmit: boolean;
  content: string;
  modified: string;
  __v: number;
}
interface Props extends Partial<IScriptScene> {
  content: string;
}

export function createScriptScene(obj: Props): IScriptScene {
  const objClean = _.pick(obj, ['_id', 'isActive', 'isOmit', 'content', 'modified', '__v'])
  return {
    _id: createObjectId(),
    isActive: true,
    isOmit: false,
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}