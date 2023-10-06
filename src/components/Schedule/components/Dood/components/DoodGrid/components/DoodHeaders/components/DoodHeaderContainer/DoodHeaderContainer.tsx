import { ReactNode } from 'react'
import { restrictToHorizontalAxis, restrictToParentElement } from '@dnd-kit/modifiers'

import { DNDContainer, DoodHeaderData } from 'common'
import { IDNDData } from 'types/types'
import { DoodHeaderColumn } from '../index'

type Props = {
  children: ReactNode;
}

const handle = false

export function DoodHeaderContainer({ children }: Props): JSX.Element {
  return (
    <DoodHeaderData>
      {({ draggingId, isSelected, items, selectedIds, setActiveId, setItems, setSelectedIds }: IDNDData)=>(
        <DNDContainer 
          activeId={draggingId} 
          handle={handle}
          isItemSelected={isSelected} 
          items={items} 
          modifiers={[restrictToHorizontalAxis]}
          overlayComponent={draggingId && <DoodHeaderColumn id={draggingId} isSelected={isSelected(draggingId)} />}
          overlayModifiers={[restrictToParentElement]}
          selectedIds={selectedIds} 
          setActiveId={setActiveId} 
          setItems={setItems} 
          setSelectedIds={setSelectedIds}
        >
          {children}
        </DNDContainer>
      )}
    </DoodHeaderData>
  )
}
