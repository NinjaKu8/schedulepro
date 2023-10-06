
/* returns an ordered array of isoDates, based on criteria. follows selection behaviors from macOS.
id:             the clicked item isoDate,
selectedIds:    array of any previously selected item isoDates
multiSelector:  generally keyboard or touch selectors for selecting multiple items at once (shift or ctrl/cmd select)
*/

import { dateAdd } from "./dateAdd"
import { dateDayOfWeek } from "./dateDayOfWeek"
import { isDateAfter } from "./isDateAfter"
import { isDateBetween } from "./isDateBetween"
import { isDateSame } from "./isDateSame"

export function multiSelectDates(id: string, selectedIds: string[], multiSelector?: 'shift'|'meta'|'alt'): string[] {
  switch(multiSelector) {
    case 'alt':
    case 'shift': 
      const orderedSelected = selectedIds.sort()
      if(!orderedSelected.length) return [id]
      const isSelectingForwards = isDateAfter(id, orderedSelected[0])
      const firstSelected = orderedSelected[0]
      const lastSelected = orderedSelected[orderedSelected.length - 1]
      const start = isSelectingForwards ? firstSelected : id
      const end = isSelectingForwards ? id : lastSelected
      const newSelected: string[] = []
      let i = start
      while(isDateSame(i,start) || isDateBetween(i,start,end) || isDateSame(i,end)) {
        if(multiSelector==='shift' || (multiSelector==='alt' && dateDayOfWeek(i)===dateDayOfWeek(id))) newSelected.push(i)
        i = dateAdd(i)
      }
      return newSelected
    case 'meta':
      if(selectedIds.includes(id)) return selectedIds.filter((i) => i !== id)
      return [...selectedIds, id]
    default: return [id]
  }
}