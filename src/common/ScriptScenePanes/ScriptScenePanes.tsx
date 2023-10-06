import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import { initialScriptPaneGroup } from 'globals/initialScriptPaneGroup'
import { Pane, PaneGroup } from 'common'
import { paneIsGroup, paneOnDragEnd } from 'helpers'
import { ITabPane, IPaneGroup } from 'types/panes'

const panesStyle = { fontSize: '.9em', height: 'calc(100vh - 8.4em)'  /* height needed to make panes work */ }

export function ScriptScenePanes(): JSX.Element {
  const [structure, setStructure] = useState<ITabPane | IPaneGroup>(initialScriptPaneGroup)

  return (
    <section className='panes flex-grow-1 d-flex flex-column py-2' style={panesStyle}>
      <DragDropContext onDragEnd={result=>paneOnDragEnd(result, structure, setStructure)}>
        {!paneIsGroup(structure) 
          ? <Pane tabPane={structure} index={0} />
          : <PaneGroup window={structure} setStructure={setStructure} />
        }
      </DragDropContext>
    </section>
  )
}