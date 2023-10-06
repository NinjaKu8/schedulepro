import { ReactNode } from 'react'

import { BoardData, DNDContainer, Item } from 'common'
import { IDNDData } from 'types/types';

type Props = {
  children: ReactNode;
}

const handle = false

export function BoardsContainer({ children }: Props): JSX.Element {
  return (
    <BoardData>
      {({ draggingId, isSelected, items, selectedIds, setActiveId, setItems, setSelectedIds }: IDNDData)=>(
        <DNDContainer 
          activeId={draggingId} 
          handle={handle}
          isItemSelected={isSelected} 
          items={items} 
          multiContainer
          overlayComponent={draggingId && <Item id={draggingId} isSelected={isSelected(draggingId)} />}
          selectedIds={selectedIds} 
          setActiveId={setActiveId} 
          setItems={setItems} 
          setSelectedIds={setSelectedIds}
        >
          {children}
        </DNDContainer>
      )}
    </BoardData>
  )
}
