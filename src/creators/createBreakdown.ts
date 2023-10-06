import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface IBreakdown {
  _id: string;
  isComplete: boolean;
  completedTime: string|null; 
  status: 'part'|'shooting'|null;
  scriptSceneId: string|null;
  valueType: 'strip'|'banner'|'day';
  scene: string|null;
  description: string|null;
  bannerText: string|null;
  scriptPage: string|null;
  pages: number|null;
  duration: number|null;
  comments: string|null;
  elementIds: string[]|null;
  ie: string|null;
  set: string|null;
  dn: string|null;
  scriptDay: string|null;
  unit: string|null;
  location: string|null;
  sequence: string|null;
  groupCode: string|null;
  modified: string;
  __v: number;
}
interface Props extends Partial<IBreakdown> {}

export function createBreakdown(obj: Props): IBreakdown {
  const objClean = _.pick(obj, ['_id', 'isComplete', 'completedTime', 'status', 'scriptSceneId', 'valueType', 'scene', 'description', 'bannerText', 'scriptPage', 'pages', 'duration', 'comments', 'elementIds', 'ie', 'set', 'dn', 'scriptDay', 'unit', 'location', 'sequence', 'groupCode', 'modified', '__v'])
  return {
    _id: createObjectId(),
    isComplete: false,
    completedTime: null, 
    status: null,
    scriptSceneId: null,
    valueType: 'strip',
    scene: null,
    description: null,
    bannerText: null,
    scriptPage: null,
    pages: null,
    duration: null,
    comments: null,
    elementIds: null,
    ie: null,
    set: null,
    dn: null,
    scriptDay: null,
    unit: null,
    location: null,
    sequence: null,
    groupCode: null,
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}