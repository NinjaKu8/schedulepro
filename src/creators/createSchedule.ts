import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ISchedule {
  _id: string;
  isActive: boolean;
  name: string;
  description: string|null;
  projectId: string;
  scriptIds: string[];
  categoryGroupId: string;
  schedScenariosOrdered: string[];
  schedCalendarsOrdered: string[];
  doodStart: string|null;
  doodWork: string|null;
  doodFinish: string|null;
  doodHold: string|null;
  doodDrop: string|null;
  doodPickup: string|null;
  modified: string;
  __v: number;
}
interface Props extends Partial<ISchedule> {
  categoryGroupId: string;
  projectId: string;
}

export function createSchedule(obj: Props): ISchedule {
  const objClean = _.pick(obj, ['_id', 'isActive', 'name', 'description', 'projectId', 'scriptIds', 'categoryGroupId', 'schedScenariosOrdered', 'schedCalendarsOrdered', 'doodStart', 'doodWork', 'doodFinish', 'doodHold', 'doodDrop', 'doodPickup', 'modified', '__v'])
  return {
    _id: createObjectId(),
    isActive: true,
    name: 'Schedule',
    description: null,
    scriptIds: [],
    schedScenariosOrdered: [],
    schedCalendarsOrdered: [],
    doodStart: 'S',
    doodWork: 'W',
    doodFinish: 'F',
    doodHold: 'H',
    doodDrop: 'D',
    doodPickup: 'P',
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}