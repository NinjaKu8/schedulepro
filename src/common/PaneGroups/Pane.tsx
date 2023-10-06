import { useState, useEffect } from 'react'
import classnames from 'classnames'

import { PaneNavBar } from './PaneNavBar'
import { PaneZones } from './PaneZones'
import { ITabPane } from 'types/panes'

type Dimension = {
  width: number;
  height: number;
}

type Props = {
  tabPane: ITabPane;
  index: number;
  dimensions?: Dimension;
}

export function Pane({ tabPane, index, dimensions }: Props): JSX.Element {
  const [selected, setSelected] = useState(tabPane.selectedTabId)
  const content = tabPane.tabs.find(tab=>tab.id===selected)?.content

  useEffect(() => {
    // this enables both drag and drop and clicking on a tab to set what content is visible below
    if(tabPane.selectedTabId!==selected) setSelected(tabPane.selectedTabId)
  }, [setSelected, tabPane.selectedTabId, selected])

  return (
    <section className='pane d-flex flex-column h-100 rounded overflow-hidden bg-white border border-primary border-opacity-50'>

      <PaneNavBar selected={selected} setSelected={setSelected} tabPane={tabPane} />

      <div className={classnames('flex-grow-1 position-relative',{ 'pane-small': dimensions && dimensions?.width<576 })}>
        <PaneZones tabPane={tabPane} index={index} />
        <div className='d-flex flex-column position-absolute h-100 w-100'>
          {content}
        </div>
      </div>
      
    </section>
  )
}
