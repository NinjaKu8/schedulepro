import classnames from 'classnames'
import { Trans, useTranslation } from 'react-i18next'

import { SortItem, SortItemsListData, SortItems } from './components'
import { DNDContainer } from 'common'
import { IDNDData } from 'types/types'
import { restrictToFirstScrollableAncestor } from '@dnd-kit/modifiers'

type SortComponentProps = {
  disabled: boolean;
}

const handle = false

export function Sort({ disabled }:SortComponentProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className={classnames('mx-5', {'text-muted': disabled})}>
      <p className='small text-muted'>
        <Trans i18nKey='sort-instructions'>
          Drag the categories from the categories list to the sort order list in order to sort by those categories. You can also select ascending or descending sorting for each category.
        </Trans>
      </p>
      <SortItemsListData>
        {({ draggingId, isSelected, items, selectedIds, setActiveId, setItems, setSelectedIds }: IDNDData)=>(
          <DNDContainer 
            activeId={draggingId} 
            handle={handle}
            isItemSelected={isSelected} 
            items={items} 
            modifiers={[restrictToFirstScrollableAncestor]}
            multiContainer
            overlayComponent={draggingId && <SortItem id={draggingId} isSelected={isSelected(draggingId)} />}
            selectedIds={selectedIds} 
            setActiveId={setActiveId} 
            setItems={setItems} 
            setSelectedIds={setSelectedIds}
          >
            <div className='d-flex gap-3'>
              <SortItems containerId='categories' handle={handle} labelName={t('Categories')} />
              <SortItems containerId='sortorder' handle={handle} labelName={t('Sort Order')} />
            </div>
          </DNDContainer>
        )}
      </SortItemsListData>
    </div>
  )
}
