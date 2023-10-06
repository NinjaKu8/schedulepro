import { ITabPane, IPaneGroup } from 'types/panes'

export function paneIsGroup(item: ITabPane | IPaneGroup): item is IPaneGroup {
  return (item as IPaneGroup).primaryAxis !== undefined
}
export function paneHasTabs(item: ITabPane | IPaneGroup): item is ITabPane {
  return (item as ITabPane).tabs !== undefined
}

export function paneAddTabPaneAtIndex(sibling: ITabPane, array: (ITabPane | IPaneGroup)[], index: number) {
  array.splice(index, 0, sibling)
}

export function paneFindById(id: string, array: (ITabPane | IPaneGroup)[]): ITabPane | undefined {
  let result
  for(let window of array) {
    if(!paneIsGroup(window) && window.id === id) {
      return window
    } else if(paneIsGroup(window)) {
      result = paneFindById(id, window.primaryAxis)
      if (result !== undefined) return result
    }
  }
  return result
}

export function paneFindGroupById(id: string | null, array: (ITabPane | IPaneGroup)[]): IPaneGroup | undefined {
  for(let window of array) {
    if(paneIsGroup(window)) {
      if(window.id === id) {
        return window
      } else {
        const result = paneFindGroupById(id, window.primaryAxis)
        if (result !== undefined) return result
      }
    }
  }
}

export function paneRemoveRedundantGroups(structure: IPaneGroup): void {
  const { primaryAxis } = structure;
  for(let i=0;i<primaryAxis.length;i++) {
    let current = primaryAxis[i]
    if(
      paneIsGroup(current) &&
      current.isVertical === structure.isVertical
    ) {
      let curLength = current.primaryAxis.length
      current.primaryAxis.forEach((window) => (window.parentId = structure.id))
      primaryAxis.splice(i, 1, ...current.primaryAxis)
      i += curLength
    }
  }
  if(primaryAxis.length === 1 && paneIsGroup(primaryAxis[0])) {
    if(primaryAxis[0].primaryAxis.length === 1 && paneIsGroup(primaryAxis[0].primaryAxis[0])) {
      structure.primaryAxis = primaryAxis[0].primaryAxis[0].primaryAxis
      paneRemoveRedundantGroups(primaryAxis[0].primaryAxis[0])
    }
    structure.isVertical = primaryAxis[0].isVertical
    structure.primaryAxis = [...primaryAxis[0].primaryAxis]
    paneRemoveRedundantGroups(primaryAxis[0])
  }
}

export const paneAlignDirections = (sectionWindow: IPaneGroup) => {
  sectionWindow.primaryAxis.forEach((window) => {
    if(paneHasTabs(window)) {
      window.parentIsVertical = sectionWindow.isVertical
      window.parentId = sectionWindow.id
    } else if(paneIsGroup(window)) {
      paneAlignDirections(window)
    }
  })
}
