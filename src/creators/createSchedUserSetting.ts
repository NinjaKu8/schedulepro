import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ISchedUserSetting {
  _id: string;
  scheduleId: string;
  userId: string;
  currentSchedScenarioId: string;
  currentSchedDesignId: string;
  currentSchedPaneSetId: string;
  modified: string;
  __v: number;
}
interface Props extends Partial<ISchedUserSetting> {
  scheduleId: string;
  userId: string;
  currentSchedScenarioId: string;
  currentSchedDesignId: string;
  currentSchedPaneSetId: string;
}

export function createSchedUserSetting(obj: Props): ISchedUserSetting {
  const objClean = _.pick(obj, ['_id', 'scheduleId', 'userId', 'currentSchedScenarioId', 'currentSchedDesignId', 'currentSchedPaneSetId', 'modified', '__v'])
  return {
    _id: createObjectId(),
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}