import _ from 'lodash'

/*
  TAKES: 
    arr: [{_id: '1', ...},{_id: '2', ...},{_id: '3', ...}]
    ids: ['2','1']
  RETURNS:
    [{_id: '2', ...},{_id: '1', ...}]
*/

export function orderArrayByIds<T extends {_id: string}>(arr: T[], ids: string[]): T[] {
  const filteredArr = arr.filter(i=>ids.includes(i._id))
  return _.sortBy(filteredArr,i=>ids.indexOf(i._id))
}