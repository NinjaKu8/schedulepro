
/* returns a selection of an ordered array, based on criteria. follows selection behaviors from macOS.
id:             the clicked item id,
ids:            full ordered array of all item ids
selectedIds:    array of any previously selected item ids
multiSelector:  generally keyboard or touch selectors for selecting multiple items at once (shift or ctrl/cmd select)
*/

export function multiSelectArray(id: string|number, ids: (string|number)[], selectedIds: (string|number)[], multiSelector?: 'shift'|'meta'): (string | number)[] {
  switch(multiSelector) {
    case 'shift': 
      if(!ids?.length) return [id]
      const orderedSelected = ids.filter(i=>selectedIds.includes(i))
      if(!orderedSelected.length) return [id]
      const firstSelected = orderedSelected[0]
      const lastSelected = orderedSelected[orderedSelected.length - 1]
      const indexOfNew = ids.indexOf(id)
      const indexOfFirst = ids.indexOf(firstSelected)
      const indexOfLast = ids.indexOf(lastSelected)
      const isSelectingForwards = indexOfNew > indexOfLast
      const start = isSelectingForwards ? indexOfFirst : indexOfNew
      const end = isSelectingForwards ? indexOfNew : indexOfLast
      const inBetween = ids.slice(start, end + 1)
      return inBetween
    case 'meta':
      if(selectedIds.includes(id)) return selectedIds.filter((i) => i !== id)
      return [...selectedIds, id]
    default: return [id]
  }
}