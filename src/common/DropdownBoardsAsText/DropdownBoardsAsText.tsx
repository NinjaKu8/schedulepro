import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { DropdownSplitAsText } from 'common'
import { getDropdownItemByEventKey } from 'helpers'


type Props = {
  boardGroupId: string;
  [x: string]: any;
}

const boards: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'First Unit' },
  { eventKey: 'ABC124', value: 'Second Unit' },
  { eventKey: 'ABC125', value: 'VFX Unit' },
  { eventKey: 'ABC126', value: 'Belfast Unit' },
]

export function DropdownBoardsAsText({ boardGroupId, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleSelectDropdown = useCallback((e: string | null): void => {
    console.log('dropdown select', e)
  },[])

  return (
    <DropdownSplitAsText 
      callback={handleSelectDropdown}
      headerText={t('Board')}
      items={boards}
      selectedItem={getDropdownItemByEventKey(boardGroupId,boards)}
      {...rest}
    />
  )
}