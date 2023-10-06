import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { DropdownSplitAsText } from 'common'
import { getDropdownItemByEventKey } from 'helpers'

type Props = {
  boardId: string;
  [x: string]: any;
}

const days: IDropdownTCItem[] = [
  { eventKey: '7', value: 'Day 7 of 45' },
  { eventKey: '8', value: 'Day 8 of 45' },
  { eventKey: '9', value: 'Day 9 of 45' },
  { eventKey: '10', value: 'Day 10 of 45' },
]

export function DropdownShootDaysAsText({ boardId, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleSelectDropdown = useCallback((e: string | null): void => {
    console.log('dropdown select', e)
  },[])

  return (
    <DropdownSplitAsText 
      callback={handleSelectDropdown}
      headerText={t('Shoot Day')}
      items={days}
      selectedItem={getDropdownItemByEventKey(boardId,days)}
      {...rest}
    />
  )
}