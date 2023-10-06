import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ICategoryGroup {
  _id: string;
  name: string;
  categoriesOrdered: string[];
  modified: string;
  __v: number;
}
interface Props extends Partial<ICategoryGroup> {}

export function createCategoryGroup(obj?: Props): ICategoryGroup {
  const objClean = _.pick(obj, ['_id', 'name', 'categoriesOrdered', 'modified', '__v'])
  return {
    _id: createObjectId(),
    name: 'CategoryGroup',
    categoriesOrdered: [],
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}