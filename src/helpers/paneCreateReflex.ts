import { paneIsGroup } from './index'
import { ITabPane, IPaneGroup } from 'types/panes'

export const paneCreateReflex = (window: IPaneGroup) => {
  if(!paneIsGroup(window)) return window
  const arr: (ITabPane | IPaneGroup | String)[] = []
  if(paneIsGroup(window)) {
    window.primaryAxis.forEach((win, idx) => {
      arr.push(win)
      if(idx !== window.primaryAxis.length - 1) arr.push('SPLIT')
    })
  }
  return arr
}
