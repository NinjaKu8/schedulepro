import { useCallback } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { paneGetTabStyle, paneGetNavBarStyle } from 'helpers'
import { ITabPane } from 'types/panes'

type Props = {
  selected: string;
  setSelected: (arg0: string) => void;
  tabPane: ITabPane;
}

export function PaneNavBar({ selected, setSelected, tabPane }: Props): JSX.Element {

  const handleOnClick = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    const id = e.currentTarget.dataset.id
    if(id) {
      tabPane.selectedTabId = id
      setSelected(id)
    }
  },[tabPane, setSelected])

  return (
    <div className='d-flex flex-shrink-0 w-100'>
      <Droppable droppableId={tabPane.id} direction='horizontal'>
        {(provided, snapshot) => (
          <div className='d-flex gap-1 flex-wrap w-100' ref={provided.innerRef} style={paneGetNavBarStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
            {tabPane.tabs.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={ paneGetTabStyle(snapshot.isDragging, provided.draggableProps.style, selected===item.id) }
                    className='d-block py-1 px-2'
                    data-id={item.id}
                    onClick={handleOnClick}
                  >
                    {item.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>

  )
}
