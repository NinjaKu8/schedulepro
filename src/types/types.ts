import { UniqueIdentifier } from '@dnd-kit/core'

export interface IJoinObject {
  firstname: string
  middlename: string
  lastname: string
  email: string
  password: string
}

/* Drag and Drop */
export type DNDItem = UniqueIdentifier
export type DNDItems = Record<DNDItem, DNDItem[]>
export type DNDSelectedIds = DNDItem[]
export type DNDDraggingId = DNDItem | null

interface IDNDHelperSimple {
  isSelected: (itemId: DNDItem) => boolean
  isSortingContainer: boolean
  onSelect: (id: DNDItem, shiftKey: boolean, metaKey: boolean) => void
}

export interface IDNDHelpers extends IDNDHelperSimple {
  filterItems: (items: DNDSelectedIds) => DNDSelectedIds
}

export interface IDNDData extends IDNDHelperSimple {
  draggingId: DNDDraggingId
  items: DNDItems
  filteredItems: DNDSelectedIds
  selectedIds: DNDSelectedIds
  setActiveId: (id: DNDDraggingId) => void
  setItems: (items: DNDItems) => void
  setSelectedIds: (ids: DNDSelectedIds) => void
}

export interface ICoordinates {
  x: number
  y: number
}

export interface IProgressReportGroup {
  _id: string
  projectId: string
  progressReportIds: string[]
}
export interface IProgressReport {
  _id: string
  boardId: string
  visualizationId: string
}

export interface ItemsWithIcon {
  [x: string]: { name: string; icon: JSX.Element | string }
}

export type ScriptView = 'pane' | 'scene' | 'script'

export type Units = 'inch' | 'centimeter' | 'pixel' | 'time' | 'percent'
