import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ISchedBreakdown {
  _id: string;
  scheduleId: string;
  isComplete: boolean;
  completedTime: string|null;
  status: string|null;
  valueType: string;
  scene: string|null;
  description: string|null;
  bannerText: string|null;
  scriptPage: string|null;
  pages: number|null;
  duration: number|null;
  comments: string|null;
  elementIds: string[];
  ie: string|null;
  set: string|null;
  dn: string|null;
  scriptDay: string|null;
  unit: string|null;
  location: string|null;
  sequence: string|null;
  scriptSceneIds: string[]|null;
  groupCode: string|null;
  modified: string;
  __v: number;
}
interface Props extends Partial<ISchedBreakdown> {
  scheduleId: string;
  valueType: string;
}

export function createSchedBreakdown(obj: Props): ISchedBreakdown {
  const objClean = _.pick(obj, ['_id', 'scheduleId', 'isComplete', 'completedTime', 'status', 'valueType', 'scene', 'description', 'bannerText', 'scriptPage', 'pages', 'duration', 'comments', 'elementIds', 'ie', 'set', 'dn', 'scriptDay', 'unit', 'location', 'sequence', 'scriptSceneIds', 'groupCode', 'modified', '__v'])
  return {
    _id: createObjectId(),
    isComplete: false,
    completedTime: null,
    status: null,
    scene: null,
    description: null,
    bannerText: null,
    scriptPage: null,
    pages: null,
    duration: null,
    comments: null,
    elementIds: [],
    ie: null,
    set: null,
    dn: null,
    scriptDay: null,
    unit: null,
    location: null,
    sequence: null,
    scriptSceneIds: null,
    groupCode: null,
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}