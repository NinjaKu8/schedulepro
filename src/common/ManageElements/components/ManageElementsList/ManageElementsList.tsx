import { HiLockClosed, HiOutlineLockOpen } from 'react-icons/hi'
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers'
import { useTranslation } from 'react-i18next'

import { ManagerList, ManagerListFooter, ManagerListColumn, ManagerListHeader, DNDItems, DNDContainer } from "common"
import { ManageElementsListData, ManageElement } from "./components"
import { IDNDData, DNDItem } from "types/types"

export function ManageElementsList(): JSX.Element {
  const { t } = useTranslation()
  return (
    <ManagerList>
      <ManageElementsListData containerId='manageelements'>
        {({ draggingId, filteredItems, isSelected, isSortingContainer, items, onSelect, selectedIds, setActiveId, setItems, setSelectedIds }: IDNDData)=>(
          <>
            <ManagerListHeader>
              <ManagerListColumn size='sm'>{false ? <HiLockClosed /> : <HiOutlineLockOpen />}</ManagerListColumn>
              <ManagerListColumn size='sm'>{t('ID')}</ManagerListColumn>
              <ManagerListColumn size='full'>{t('Name')}</ManagerListColumn>
              <ManagerListColumn size='md' className='text-center'>{t('Breakdowns')}</ManagerListColumn>
            </ManagerListHeader>
            <div className='overflow-auto flex-grow-1 rounded-1'>
              <DNDContainer 
                activeId={draggingId} 
                handle={false}
                isItemSelected={isSelected} 
                items={items} 
                modifiers={[restrictToVerticalAxis]}
                overlayComponent={draggingId && <ManageElement id={draggingId} isSelected={isSelected(draggingId)} />}
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
                  id='manageelements'
                  items={filteredItems}
                  onSelect={onSelect}
                >
                  {(id: DNDItem)=>( <ManageElement id={id} isSelected={isSelected(id)} /> )}
                </DNDItems>
              </DNDContainer>
            </div>
            <ManagerListFooter count={filteredItems.length} />
          </>
        )}
      </ManageElementsListData>
    </ManagerList>
  )
}
