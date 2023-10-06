
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setSch_manageelements_draggingId, setSch_manageelements_selectedIds, setTemp_manageelements } from 'store/slices/local'
import { useDNDHelpers } from 'hooks'
import { IDNDData, DNDDraggingId, DNDItem, DNDItems, DNDSelectedIds } from 'types/types';
import { useCallback } from 'react';

type Props = {
  children(x: IDNDData): JSX.Element;
  containerId?: DNDItem;
}

export function ManageElementsListData({ children, containerId }: Props): JSX.Element {
  const items: DNDItems = useAppSelector(state=>state.local.temp_manageelements)
  const draggingId: DNDDraggingId = useAppSelector(state=>state.local.sch_manageelements_draggingId)
  const selectedIds: DNDSelectedIds = useAppSelector(state=>state.local.sch_manageelements_selectedIds)
  const dispatch = useAppDispatch()

  const setActiveId = useCallback((id: DNDDraggingId): void => {
    dispatch(setSch_manageelements_draggingId(id))
  },[dispatch])

  const setItems = useCallback((items: DNDItems): void => {
    dispatch(setTemp_manageelements(items))
  },[dispatch])

  const setSelectedIds = useCallback((ids: DNDSelectedIds): void => {
    dispatch(setSch_manageelements_selectedIds(ids))
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
