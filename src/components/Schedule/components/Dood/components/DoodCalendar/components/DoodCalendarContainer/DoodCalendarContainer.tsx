import { ReactNode } from 'react'
import { restrictToParentElement } from '@dnd-kit/modifiers'

import { DNDContainer, DoodCalendarData } from 'common'
import { DoodCalendarDay } from '../index'
import { IDNDData } from 'types/types'

type Props = {
  children: ReactNode;
}

const handle = false

export function DoodCalendarContainer({ children }: Props): JSX.Element {
  return (
    <DoodCalendarData>
      {({ draggingId, isSelected, items, selectedIds, setActiveId, setItems, setSelectedIds }: IDNDData)=>(
        <DNDContainer 
          activeId={draggingId} 
          handle={handle}
          isItemSelected={isSelected} 
          items={items} 
          overlayComponent={draggingId && <DoodCalendarDay date={draggingId as string} isSelected={isSelected(draggingId)} />}
          overlayModifiers={[restrictToParentElement]}
          selectedIds={selectedIds} 
          setActiveId={setActiveId} 
          setItems={setItems} 
          setSelectedIds={setSelectedIds}
        >
          {children}
        </DNDContainer>
      )}
    </DoodCalendarData>
  )
}
