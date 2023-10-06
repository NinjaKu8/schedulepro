import { Droppable } from 'react-beautiful-dnd'

import { paneGetZoneStyle } from 'helpers'
import { ITabPane } from 'types/panes'

type PaneZonesProps = {
  tabPane: ITabPane;
  index: number;
}

type PaneZoneProps = {
  droppableId: string;
  className: string;
  style: React.CSSProperties;
}

type SideObject = {
  id: string;
  side: string;
  style: React.CSSProperties;
}

const sides: SideObject[] = [
  { id: '1', side: 'left', style: { bottom: 0, top: 0, left: 0, width: '20%' } },
  { id: '2', side: 'right', style: { bottom: 0, top: 0, right: 0, width: '20%' } },
  { id: '3', side: 'top', style: { top: 0, left: '20%', right: '20%', height: 'calc(50% - .5em)' } },
  { id: '4', side: 'bottom', style: { bottom: 0, left: '20%', right: '20%', height: 'calc(50% - .5em)' } },
]

function PaneZone({ droppableId, className, style }: PaneZoneProps): JSX.Element {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => {
        const paneZoneStyle = {...style, ...paneGetZoneStyle(snapshot.isDraggingOver)}
        return (
          <div className={className} ref={provided.innerRef} style={paneZoneStyle} {...provided.droppableProps}>
            {provided.placeholder}
          </div>
        )
      }}
    </Droppable>
  )
}

export function PaneZones({ tabPane, index }: PaneZonesProps): JSX.Element {
  return (
    <>
      {sides.map(side=>(
        <PaneZone
          key={side.id}
          droppableId={`${tabPane.id}-${side.side}-${index}`}
          className={`position-absolute m-1 rounded pane-zone-${side.side}`}
          style={side.style}
        />
      ))}
    </>
  )
}
