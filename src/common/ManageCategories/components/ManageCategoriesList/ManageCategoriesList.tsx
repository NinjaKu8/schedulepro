import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers'
import { useTranslation } from 'react-i18next'

import { ManagerList, ManagerListFooter, ManagerListColumn, ManagerListHeader, DNDItems, DNDContainer } from "common"
import { ManageCategoriesListData, ManageCategory } from "./components"
import { IDNDData, DNDItem } from "types/types"

export function ManageCategoriesList(): JSX.Element {
  const { t } = useTranslation()
  return (
    <ManagerList>
      <ManageCategoriesListData containerId='managecategories'>
        {({ draggingId, filteredItems, isSelected, isSortingContainer, items, onSelect, selectedIds, setActiveId, setItems, setSelectedIds }: IDNDData)=>(
          <>
            <ManagerListHeader>
              <ManagerListColumn size='full'>{t('Name')}</ManagerListColumn>
              <ManagerListColumn size='md' className='text-center'>{t('Elements')}</ManagerListColumn>
            </ManagerListHeader>
            <div className='overflow-auto flex-grow-1 rounded-1'>
              <DNDContainer 
                activeId={draggingId} 
                handle={false}
                isItemSelected={isSelected} 
                items={items} 
                modifiers={[restrictToVerticalAxis]}
                overlayComponent={draggingId && <ManageCategory id={draggingId} isSelected={isSelected(draggingId)} />}
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
                  id='managecategories'
                  items={filteredItems}
                  onSelect={onSelect}
                >
                  {(id: DNDItem)=>( <ManageCategory id={id} isSelected={isSelected(id)} /> )}
                </DNDItems>
              </DNDContainer>
            </div>
            <ManagerListFooter count={filteredItems.length} />
          </>
        )}
      </ManageCategoriesListData>
    </ManagerList>
  )
}
