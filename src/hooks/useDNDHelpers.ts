
import { multiSelectArray } from 'helpers'
import { DNDDraggingId, DNDItem, DNDItems, DNDSelectedIds, IDNDHelpers } from 'types/types'

// various helper functions for DND
export function useDNDHelpers(items: DNDItems, draggingId: DNDDraggingId, selectedIds: DNDSelectedIds, callback:(ids:DNDSelectedIds)=>void): IDNDHelpers {
  
  const isSelected = (itemId: DNDItem): boolean => selectedIds.includes(itemId)

  const isSortingContainer: boolean = draggingId ? (Object.keys(items) as DNDSelectedIds).includes(draggingId) : false

  function filterItems(items: DNDSelectedIds): DNDSelectedIds {
		if(!draggingId) return items
		return items.filter((id) => id === draggingId || !selectedIds.includes(id))
	}

  function onSelect(id: DNDItem, shiftKey: boolean, metaKey: boolean): void {
		const containerId = Object.keys(items).find((key) => items[key].includes(id))
		if(!containerId) return
		const multiSelector = shiftKey ? 'shift' : metaKey ? 'meta': undefined
		return callback(multiSelectArray(id, items[containerId], selectedIds, multiSelector))
	}

  return { isSelected, isSortingContainer, filterItems, onSelect }
}