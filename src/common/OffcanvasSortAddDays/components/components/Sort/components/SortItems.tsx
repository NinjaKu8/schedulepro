
import { SortItemsBox, SortItemsListData, SortItem } from "./index"
import { DNDItems } from "common"
import { IDNDData, DNDItem } from "types/types"

type Props = {
  containerId: DNDItem;
  handle?: boolean;
  labelName?: string;
}

export function SortItems({ containerId, handle, labelName }: Props): JSX.Element {
  return (
    <SortItemsListData containerId={containerId}>
      {({ isSelected, isSortingContainer, filteredItems, onSelect }: IDNDData)=>(
        <SortItemsBox labelName={labelName} className={`${containerId==='sortorder' ? 'w-75' : 'w-25'}`}>
          <DNDItems
            className='p-3 d-flex flex-column gap-1'
            disabled={isSortingContainer}
            handle={handle}
            id={containerId}
            items={filteredItems}
            onSelect={onSelect}
          >
            {(id: DNDItem)=>( <SortItem id={id} isSelected={isSelected(id)}  /> )}
          </DNDItems>
        </SortItemsBox>
      )}
    </SortItemsListData>
    
  )
}
