import { useCallback } from 'react'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setSch_breakdown_draggingId, setSch_breakdown_selectedIds, setTemp_boards } from 'store/slices/local'
import { useDNDHelpers } from 'hooks'
import { IDNDData, DNDDraggingId, DNDItem, DNDItems, DNDSelectedIds } from 'types/types'

type Props = {
  children(x: IDNDData): JSX.Element;
  containerId?: DNDItem;
}

export function BoardData({ children, containerId }: Props): JSX.Element {
  const dispatch = useAppDispatch()
  const items: DNDItems = useAppSelector(state=>state.local.temp_boards)
  const draggingId: DNDDraggingId = useAppSelector(state=>state.local.sch_breakdown_draggingId)
  const selectedIds: DNDSelectedIds = useAppSelector(state=>state.local.sch_breakdown_selectedIds)

  const setActiveId = useCallback((id: DNDDraggingId): void => {
    dispatch(setSch_breakdown_draggingId(id))
  },[dispatch])

  const setItems = useCallback((items: DNDItems): void => {
    dispatch(setTemp_boards(items))
  },[dispatch])

  const setSelectedIds = useCallback((ids: DNDSelectedIds): void => {
    dispatch(setSch_breakdown_selectedIds(ids))
  },[dispatch])
  
  const { isSelected, isSortingContainer, filterItems, onSelect } = useDNDHelpers(items, draggingId, selectedIds, setSelectedIds)

  return (
    children({ 
      draggingId, 
      isSelected, 
      isSortingContainer, 
      items, 
      filteredItems: containerId ? filterItems(items[containerId]) : [], 
      onSelect, 
      selectedIds, 
      setActiveId, 
      setItems, 
      setSelectedIds 
    })
  )
}
