
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setSch_managepanes_draggingId, setSch_managepanes_selectedIds, setTemp_managepanes } from 'store/slices/local'
import { useDNDHelpers } from 'hooks'
import { IDNDData, DNDDraggingId, DNDItem, DNDItems, DNDSelectedIds } from 'types/types';
import { useCallback } from 'react';

type Props = {
  children(x: IDNDData): JSX.Element;
  containerId?: DNDItem;
}

export function ManagePanesListData({ children, containerId }: Props): JSX.Element {
  const items: DNDItems = useAppSelector(state=>state.local.temp_managepanes)
  const draggingId: DNDDraggingId = useAppSelector(state=>state.local.sch_managepanes_draggingId)
  const selectedIds: DNDSelectedIds = useAppSelector(state=>state.local.sch_managepanes_selectedIds)
  const dispatch = useAppDispatch()

  const setActiveId = useCallback((id: DNDDraggingId): void => {
    dispatch(setSch_managepanes_draggingId(id))
  },[dispatch])

  const setItems = useCallback((items: DNDItems): void => {
    dispatch(setTemp_managepanes(items))
  },[dispatch])

  const setSelectedIds = useCallback((ids: DNDSelectedIds): void => {
    dispatch(setSch_managepanes_selectedIds(ids))
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
