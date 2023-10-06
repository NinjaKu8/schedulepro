import { useCallback } from 'react'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setSch_doodheader_draggingId, setSch_doodheader_selectedIds, setTemp_doodheader } from 'store/slices/local'
import { useDNDHelpers } from 'hooks'
import { IDNDData, DNDDraggingId, DNDItem, DNDItems, DNDSelectedIds } from 'types/types';

type Props = {
  children(x: IDNDData): JSX.Element;
  containerId?: DNDItem;
}

export function DoodHeaderData({ children, containerId }: Props): JSX.Element {
  const items: DNDItems = useAppSelector(state=>state.local.temp_doodheader)
  const draggingId: DNDDraggingId = useAppSelector(state=>state.local.sch_doodheader_draggingId)
  const selectedIds: DNDSelectedIds = useAppSelector(state=>state.local.sch_doodheader_selectedIds)
  const dispatch = useAppDispatch()

  const setActiveId = useCallback((id: DNDDraggingId): void => {
    dispatch(setSch_doodheader_draggingId(id))
  }, [dispatch])

  const setItems = useCallback((items: DNDItems): void => {
    dispatch(setTemp_doodheader(items))
  }, [dispatch])

  const setSelectedIds = useCallback((ids: DNDSelectedIds): void => {
    dispatch(setSch_doodheader_selectedIds(ids))
  }, [dispatch])

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
