import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers'
import { useTranslation } from 'react-i18next'

import { ManagerList, ManagerListFooter, ManagerListColumn, ManagerListHeader, DNDItems, DNDContainer } from "common"
import { ManageDesignsDesignsListData, ManageDesignsDesign } from "./components"
import { IDNDData, DNDItem } from "types/types"

export function ManageDesignsDesignsList(): JSX.Element {
  const { t } = useTranslation()
  return (
    <ManagerList>
      <ManageDesignsDesignsListData containerId='managedesignsdesigns'>
        {({ draggingId, filteredItems, isSelected, isSortingContainer, items, onSelect, selectedIds, setActiveId, setItems, setSelectedIds }: IDNDData)=>(
          <>
            <ManagerListHeader>
              <ManagerListColumn size='full'>{t('Name')}</ManagerListColumn>
              <ManagerListColumn size='md' className='text-center'>{t('Public')}</ManagerListColumn>
            </ManagerListHeader>
            <div className='overflow-auto flex-grow-1 rounded-1'>
              <DNDContainer 
                activeId={draggingId} 
                handle={false}
                isItemSelected={isSelected} 
                items={items} 
                modifiers={[restrictToVerticalAxis]}
                overlayComponent={draggingId && <ManageDesignsDesign id={draggingId} isSelected={isSelected(draggingId)} />}
                overlayModifiers={[restrictToParentElement]}
                selectedIds={selectedIds} 
                setActiveId={setActiveId} 
                setItems={setItems} 
                setSelectedIds={setSelectedIds}
              >
                <DNDItems
                  className='d-flex flex-column gap-1'
                  disabled={isSortingContainer}
                  handle={false}
                  id='managedesignsdesigns'
                  items={filteredItems}
                  onSelect={onSelect}
                >
                  {(id: DNDItem)=>( <ManageDesignsDesign id={id} isSelected={isSelected(id)} /> )}
                </DNDItems>
              </DNDContainer>
            </div>
            <ManagerListFooter count={filteredItems.length} />
          </>
        )}
      </ManageDesignsDesignsListData>
    </ManagerList>
  )
}
