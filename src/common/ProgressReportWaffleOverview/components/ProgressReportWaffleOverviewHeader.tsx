import { useTranslation } from 'react-i18next'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { DropdownSplitAsText } from 'common'
import { getDropdownItemByEventKey } from 'helpers'

type Props = {
  handleSelectSort: (e: string | null) => void;
  selectedBoardId: string;
}
const sort: IDropdownTCItem[] = [
  { eventKey: 'boardOrder', value: 'Board Order' },
  { eventKey: 'scriptOrder', value: 'Script Order' },
]

export function ProgressReportWaffleOverviewHeader( { handleSelectSort, selectedBoardId }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex flex-column flex-md-row justify-content-end mb-2'>
      <DropdownSplitAsText 
        callback={handleSelectSort}
        headerText={t('Sort By')}
        items={sort}
        selectedItem={getDropdownItemByEventKey(selectedBoardId,sort)}
      />
    </div>
  )
}