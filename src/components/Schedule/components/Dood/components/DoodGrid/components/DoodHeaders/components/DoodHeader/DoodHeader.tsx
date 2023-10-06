
import { DoodHeaderData, DNDItems } from 'common'
import { DoodHeaderColumn } from '../index'
import { IDNDData, DNDItem } from "types/types"

type Props = {
  doodHeaderId: DNDItem;
  handle?: boolean;
}

export function DoodHeader({ doodHeaderId, handle }: Props): JSX.Element {
  return (
    <DoodHeaderData containerId={doodHeaderId}>
      {({ isSelected, isSortingContainer, filteredItems, onSelect }: IDNDData)=>(
        <DNDItems
          className='d-flex'
          disabled={isSortingContainer}
          handle={handle}
          id={doodHeaderId}
          items={filteredItems}
          onSelect={onSelect}
          strategy='horizontal'
        >
          {(id: DNDItem)=>( <DoodHeaderColumn id={id} isSelected={isSelected(id)} /> )}
        </DNDItems>
      )}
    </DoodHeaderData>
  )
}
