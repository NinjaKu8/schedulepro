import isArray from 'lodash/isArray'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'

export function getDropdownItemByEventKey(eventKey: string | number, items: IDropdownTCItem[]): IDropdownTCItem | null {
  if(isArray(items) && items.length) {
    return items.find(i=>i.eventKey===eventKey) ?? items[0]
  }
  return null
}