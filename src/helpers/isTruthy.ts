import _ from 'lodash'

export function isTruthy(value: string | boolean | null | undefined): boolean {
  if(value===true) return true
  if(_.isString(value)) return value.toLowerCase()==='yes' || value.toLowerCase()==='true'
  return false
}