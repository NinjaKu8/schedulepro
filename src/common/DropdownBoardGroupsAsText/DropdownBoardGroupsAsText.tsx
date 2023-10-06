import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { DropdownSplitAsText } from 'common'
import { getDropdownItemByEventKey } from 'helpers'

type Props = {
  scheduleId: string;
  [x: string]: any;
}

const boardGroups: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'Revised Blue Schedule' },
  { eventKey: 'ABC124', value: 'Revised Pink Schedule' },
  { eventKey: 'ABC125', value: 'Revised Yellow Schedule' },
  { eventKey: 'ABC126', value: 'Revised Green Schedule' },
]

export function DropdownBoardGroupsAsText({ scheduleId, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleSelectDropdown = useCallback((e: string | null): void => {
    console.log('dropdown select', e)
  },[])

  return (
    <DropdownSplitAsText 
      callback={handleSelectDropdown}
      headerText={t('Board')}
      items={boardGroups}
      selectedItem={getDropdownItemByEventKey(scheduleId,boardGroups)}
      {...rest}
    />
  )
}