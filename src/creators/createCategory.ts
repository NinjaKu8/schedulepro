import _ from 'lodash'

import { dateTimeNow, createObjectId } from 'helpers'

export interface ICategory {
  _id: string;
  name: string;
  ussId: number;
  elementsOrdered: string[];
  isRemovable: boolean;
  breakdownField: string|null;
  modified: string;
  __v: number;
}
interface Props extends Partial<ICategory> {
  ussId: number;
}

export function createCategory(obj: Props): ICategory {
  const objClean = _.pick(obj, ['_id', 'name', 'ussId', 'elementsOrdered', 'isRemovable', 'breakdownField', 'modified', '__v'])
  return {
    _id: createObjectId(),
    name: 'Category',
    elementsOrdered: [],
    isRemovable: true,
    breakdownField: null,
    modified: dateTimeNow(),
    __v: 0,
    ...objClean,
  }
}