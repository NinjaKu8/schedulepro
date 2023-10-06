import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ISchedScenario {
  _id: string;
  name: string;
  schedBoardsOrdered: string[];
  calendarId: string;
  revisionName: string|null;
  revisionDate: string|null;
  revisionScriptName: string|null;
  revisionScriptDate: string|null;
  modified: string;
  __v: number;
}
interface Props extends Partial<ISchedScenario> {
  calendarId: string;
}

export function createSchedScenario(obj: Props): ISchedScenario {
  const objClean = _.pick(obj, ['_id', 'name', 'schedBoardsOrdered', 'calendarId', 'revisionName', 'revisionDate', 'revisionScriptName', 'revisionScriptDate', 'modified', '__v'])
  return {
    _id: createObjectId(),
    name: 'Scenario',
    schedBoardsOrdered: [],
    revisionName: null,
    revisionDate: null,
    revisionScriptName: null,
    revisionScriptDate: null,
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}