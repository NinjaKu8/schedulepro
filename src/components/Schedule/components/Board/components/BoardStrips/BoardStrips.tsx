
import { BoardData, DNDItems, Item } from 'common'
import { IDNDData, DNDItem } from 'types/types'

type Props = {
  boardId: string;
  handle?: boolean;
}

export function BoardStrips({ boardId, handle }: Props): JSX.Element {
  return (
    <div className='overflow-auto h-100'>
      <BoardData containerId={boardId}>
        {({ isSelected, isSortingContainer, filteredItems, onSelect }: IDNDData)=>(
          <DNDItems
            className='m-1 d-flex flex-column gap-1'
            disabled={isSortingContainer}
            handle={handle}
            id={boardId}
            items={filteredItems}
            onSelect={onSelect}
          >
            {(id: DNDItem)=>( <Item id={id} isSelected={isSelected(id)} /> )}
          </DNDItems>
        )}
      </BoardData>
    </div>
  )
}