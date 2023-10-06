import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers'
import { useTranslation } from 'react-i18next'

import { ManagerList, ManagerListFooter, ManagerListColumn, ManagerListHeader, DNDItems, DNDContainer } from "common"
import { ManageScenariosListData, ManageScenario } from "./components"
import { IDNDData, DNDItem } from "types/types"

export function ManageScenariosList(): JSX.Element {
  const { t } = useTranslation()
  return (
    <ManagerList>
      <ManageScenariosListData containerId='manageboards'>
        {({ draggingId, filteredItems, isSelected, isSortingContainer, items, onSelect, selectedIds, setActiveId, setItems, setSelectedIds }: IDNDData)=>(
          <>
            <ManagerListHeader>
              <ManagerListColumn size='full'>{t('Name')}</ManagerListColumn>
              <ManagerListColumn size='md' className='text-center'>{t('Start')}</ManagerListColumn>
            </ManagerListHeader>
            <div className='overflow-auto flex-grow-1 rounded-1'>
              <DNDContainer 
                activeId={draggingId} 
                handle={false}
                isItemSelected={isSelected} 
                items={items} 
                modifiers={[restrictToVerticalAxis]}
                overlayComponent={draggingId && <ManageScenario id={draggingId} isSelected={isSelected(draggingId)} />}
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
                  id='manageboards'
                  items={filteredItems}
                  onSelect={onSelect}
                >
                  {(id: DNDItem)=>( <ManageScenario id={id} isSelected={isSelected(id)} /> )}
                </DNDItems>
              </DNDContainer>
            </div>
            <ManagerListFooter count={filteredItems.length} />
          </>
        )}
      </ManageScenariosListData>
    </ManagerList>
  )
}
