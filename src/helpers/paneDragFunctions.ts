import { Dispatch, SetStateAction } from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { createUniqueId } from './index'
import { paneIsGroup, paneHasTabs, paneFindGroupById, paneFindById, paneRemoveRedundantGroups, paneAlignDirections, paneAddTabPaneAtIndex } from './index'
import { TabData, ITabPane, IPaneGroup } from 'types/panes'

const reorder = (list: TabData[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const getColumnOffset = (dropZoneId: string): number => {
  const parsedId = dropZoneId.split('-')
  return parsedId[1] === 'right' ? 1 : 0
}
const getRowOffset = (dropZoneId: string): number => {
  const parsedId = dropZoneId.split('-')
  return parsedId[1] === 'bottom' ? 1 : 0
}

const createNewTabPane = (tab: TabData[], parentIsVertical: boolean, parentId: string): ITabPane => {
  return {
    tabs: tab,
    id: createUniqueId(),
    selectedTabId: tab[0].id,
    parentIsVertical: parentIsVertical,
    parentId,
    // flex: .5,
  }
}

const createNewPaneGroup = (tabWindows: ITabPane[], isVertical: boolean, parentId: string | null): IPaneGroup => {
  const id = createUniqueId()
  tabWindows.forEach((window) => {
    window.parentId = id
    window.parentIsVertical = isVertical
  })
  return {
    isVertical: isVertical,
    primaryAxis: tabWindows,
    id,
    parentId,
  }
}

const filterOutEmptyPanes = (array: (ITabPane | IPaneGroup)[]): (ITabPane | IPaneGroup)[] => {
  array = array.filter((window) => {
    if(paneHasTabs(window)) {
      return window.tabs.length > 0
    } else if(paneIsGroup(window)) {
      return window.primaryAxis.length > 0
    }
    return false
  })
  return array
}

const filterAllEmptyPanes = (sectionWindow: IPaneGroup): void => {
  sectionWindow.primaryAxis = filterOutEmptyPanes(sectionWindow.primaryAxis)
  sectionWindow.primaryAxis.forEach((window) => {
    if(paneIsGroup(window)) {
      filterAllEmptyPanes(window)
    }
  })
}

export const paneGetTabStyle = (isDragging: boolean, draggableStyle: any, isSelected: boolean) => ({
  backgroundColor: isDragging 
    ? 'var(--bs-gray-700)' 
    : isSelected
      ? 'var(--bs-white)'
      : 'rgba(var(--bs-primary-rgb), .25)',
  color: isDragging ? 'white' : 'black',
  borderRadius: isDragging ? '.25rem .25rem .25rem .25rem' : '.25rem .25rem 0 0',
  ...draggableStyle,
})

export const paneGetZoneStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'rgba(var(--bs-primary-rgb), .5)' : 'transparent',
  zIndex: isDraggingOver ? 10 : 0,
})

export const paneGetNavBarStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'rgba(var(--bs-primary-rgb), .75)' : 'rgba(var(--bs-primary-rgb), .5)',
  padding: '0.25rem 0.25rem 0 0.25rem', 
  transition: 'background-color 200ms', 
})

export function paneOnDragEnd(result: DropResult, structure: ITabPane | IPaneGroup, setStructure: Dispatch<SetStateAction<ITabPane | IPaneGroup>>) {
  // dropped outside the list
  if(!result.destination) {
    return
  }
  const { source, destination } = result
  const sourceId = source.droppableId
  const destinationId = destination.droppableId

  // WILL EVALUATE FALSE IF IN INTITIAL STATE WITH ONE WINDOW
  if(paneIsGroup(structure)) {
    // copy data structure to avoid directly mutating state
    let structureClone: IPaneGroup | ITabPane = { ...structure }
    // get reference to copy of source window
    let pane = paneFindById(sourceId, structureClone.primaryAxis)!

    if(pane.tabs.length === 1 && sourceId === destinationId.split('-')[0]) {
      // PREVENT CRASH WHEN DRAGGING SINGLE TAB INTO ITS OWN DROP ZONES
      return
    }

    if(sourceId === destinationId) {
      // IS IN SAME WINDOW, REORDER TABS
      // show content of dragged tab
      pane.selectedTabId = pane.tabs[result.source.index].id
      // reorder tabs in same pane
      const items = reorder(
        pane.tabs,
        result.source.index,
        result.destination.index
      )
      pane.tabs = items
      setStructure(structureClone)
    } else {
      // DROPPING IN DIFFERENT WINDOW
      // remove tab from pane tabs array
      const tab = pane.tabs.splice(result.source.index, 1)!
      if(pane.tabs[0]) pane.selectedTabId = pane.tabs[0].id
      // find parent
      const parent: IPaneGroup | ITabPane =
        pane.parentId === structureClone.id
          ? structureClone
          : paneFindGroupById(
              pane.parentId as string,
              structureClone.primaryAxis
            )!

      const grandparent =
        structureClone.id === parent?.parentId
          ? structureClone
          : paneFindGroupById(parent.parentId, structureClone.primaryAxis)

      if(!pane.tabs.length) {
        parent.primaryAxis = filterOutEmptyPanes(parent.primaryAxis)

        const parentIndex = grandparent?.primaryAxis.indexOf(parent)

        if(parent.primaryAxis.length === 0 && grandparent !== undefined) {
          // remove empty section pane from grandparent primary axis
          grandparent.primaryAxis = grandparent?.primaryAxis.filter(
            (pane) => pane.id !== parent.id
          )
        }
        // if only one element, transform to tabpane
        if(parent.primaryAxis.length === 1) {
          if(grandparent && parentIndex && parentIndex > -1) {
            grandparent.primaryAxis[parentIndex] = parent.primaryAxis[0]
            grandparent.primaryAxis[parentIndex].parentId = grandparent.id
            grandparent.primaryAxis.forEach((pane) => {
              if(paneHasTabs(pane)) {
                pane.parentIsVertical = grandparent.isVertical
                pane.parentId = grandparent.id
              }
            })
          }
        }
      }

      const destinationWindow = paneFindById(destinationId, structureClone.primaryAxis)

      if(destinationWindow) {
        // add to existing pane's tabs in correct order
        destinationWindow.tabs.splice(result.destination.index, 0, tab[0])
        destinationWindow.selectedTabId = tab[0].id

        parent.primaryAxis = filterOutEmptyPanes(parent.primaryAxis)

        // if only one element, transform to tabpane
        if(parent.primaryAxis?.length === 1) {
          const parentIndex = grandparent?.primaryAxis.indexOf(parent)
          if(grandparent && parentIndex && parentIndex > -1) {
            grandparent.primaryAxis[parentIndex] = parent.primaryAxis[0]
            grandparent.primaryAxis[parentIndex].parentId = grandparent.id
          }
        }

        if(paneIsGroup(structureClone) && structureClone.primaryAxis.length === 1) {
          // reset to default state of single tab pane
          while (
            paneIsGroup(structureClone.primaryAxis[0]) &&
            structureClone.primaryAxis[0].primaryAxis.length === 1
          ) {
            paneRemoveRedundantGroups(structureClone)
          }
          structureClone = structureClone.primaryAxis[0]
          if(paneIsGroup(structureClone)) structureClone.parentId = null
          else if(paneHasTabs(structureClone))
            structureClone.parentId = 'null'
        }
        if(paneIsGroup(structureClone)) {
          filterAllEmptyPanes(structureClone)
          paneRemoveRedundantGroups(structureClone)
          paneAlignDirections(structureClone)
        }
        setStructure(structureClone)
      } else {
        // CREATE A NEW WINDOW AND PLACE IN THE CORRECT LOCATION
        // parse drop zone
        const destinationWindowIdAsArray = destinationId.split('-')
        // identify id of destination pane
        const destinationWindowId = destinationWindowIdAsArray[0]
        const destinationDropZone = destinationWindowIdAsArray[1]
        const destinationSibling = paneFindById(
          destinationWindowId,
          structureClone.primaryAxis
        )!
        const destinationSectionWindow =
          destinationSibling.parentId === structureClone.id
            ? structureClone
            : paneFindGroupById(
                destinationSibling.parentId as string,
                structure.primaryAxis
              )!
        const newWindow = createNewTabPane(tab, pane.parentIsVertical, destinationSectionWindow?.id || 'null')
        /**
         * WE NEED TO KNOW DIRECTION OF PARENT
         * TO DETERMINE WHICH LEVEL TO APPEND
         * WINDOW TO -
         * PRIMARY AXIS OF PARENT
         * OR TRANSFORM TO SECTION WINDOW AND ADD AS SIBLING
         */
        if(
          (destinationSibling.parentIsVertical &&
            (destinationDropZone === 'bottom' ||
              destinationDropZone === 'top')) ||
          (!destinationSibling.parentIsVertical &&
            (destinationDropZone === 'left' || destinationDropZone === 'right'))
        ) {
          /**
           * APPEND TO PARENT PRIMARY AXIS AT CORRECT INDEX
           */
          let siblingIndex = destinationSectionWindow?.primaryAxis.indexOf(destinationSibling)
          if(destinationSibling.parentIsVertical) {
            siblingIndex += getRowOffset(destinationId)
            paneAddTabPaneAtIndex(
              newWindow,
              destinationSectionWindow.primaryAxis,
              siblingIndex
            )
          } else {
            siblingIndex += getColumnOffset(destinationId)
            paneAddTabPaneAtIndex(
              newWindow,
              destinationSectionWindow.primaryAxis,
              siblingIndex
            )
          }
        } else {
          /**
           * TRANSFORM TAB WINDOW TO SECTION WINDOW
           */
          destinationSibling.parentIsVertical =
            destinationSectionWindow.isVertical
          newWindow.parentIsVertical = destinationSectionWindow.isVertical
          let destinationSiblingIndex = destinationSectionWindow.primaryAxis.indexOf(
            destinationSibling
          )
          let primaryAxis: ITabPane[] = []
          if(
            (destinationSibling.parentIsVertical &&
              !getColumnOffset(destinationId)) ||
            (!destinationSibling.parentIsVertical &&
              !getRowOffset(destinationId))
          ) {
            // determine location and construct array accordingly
            primaryAxis = [newWindow, destinationSibling]
          } else {
            primaryAxis = [destinationSibling, newWindow]
          }
          const newSectionWindow = createNewPaneGroup(primaryAxis, !destinationSectionWindow.isVertical, destinationSectionWindow.id)
          destinationSectionWindow.primaryAxis[
            destinationSiblingIndex
          ] = newSectionWindow
        }

        // EDGE CASE
        if(
          grandparent &&
          destinationSectionWindow.primaryAxis.length === 1 &&
          paneIsGroup(destinationSectionWindow.primaryAxis[0]) &&
          destinationSectionWindow.isVertical !== grandparent.isVertical
        ) {
          let parentIndex = grandparent.primaryAxis.indexOf(destinationSectionWindow)
          grandparent.primaryAxis.splice(
            parentIndex,
            1,
            ...destinationSectionWindow.primaryAxis[0].primaryAxis
          )
        }
        if(paneIsGroup(structureClone)) {
          filterAllEmptyPanes(structureClone)
          paneRemoveRedundantGroups(structureClone)
          paneAlignDirections(structureClone)
        }
        setStructure(structureClone)
      }
    }
  } else {
    const pane = { ...structure }
    /**
     * THIS IS THE INITIAL WINDOW
     */
    if(sourceId === destinationId) {
      // REORDER TABS OF INITIAL WINDOW
      // show content of dragged tab
      pane.selectedTabId = pane.tabs[result.source.index].id
      // reorder tabs in same pane
      const items = reorder(
        pane.tabs,
        result.source.index,
        result.destination.index
      )
      pane.tabs = items
      setStructure(pane)
    } else {
      // TRANSFORM TAB WINDOW INTO SECTION WINDOW
      const tab = pane.tabs.splice(result.source.index, 1)!
      if(pane.tabs[0]) pane.selectedTabId = pane.tabs[0].id
      const destinationZone = destinationId.split('-')[1]
      const isVertical = destinationZone === 'bottom' || destinationZone === 'top'
      const newTabWindow = createNewTabPane(tab, !isVertical, structure.id)
      pane.parentIsVertical = isVertical

      let primaryAxis: ITabPane[] = []

      if(
        (!isVertical && destinationZone === 'left') ||
        (isVertical && destinationZone === 'top')
      ) {
        primaryAxis = [newTabWindow, pane]
      } else {
        primaryAxis = [pane, newTabWindow]
      }

      const newSectionWindow = createNewPaneGroup(primaryAxis, isVertical, null)
      setStructure(newSectionWindow)
    }
  }
}
