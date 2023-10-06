import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { DropdownSplitAsText } from 'common'
import { getDropdownItemByEventKey } from 'helpers'

type Props = {
  projectId: string;
  [x: string]: any;
}

const schedules: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'First Draft' },
  { eventKey: 'ABC124', value: 'Second Draft' },
  { eventKey: 'ABC125', value: 'Third Draft' },
  { eventKey: 'ABC126', value: 'Fourth Draft' },
]

export function DropdownScheduleAsText({ projectId, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleSelectDropdown = useCallback((e: string | null): void => {
    console.log('dropdown select', e)
  },[])

  return (
    <DropdownSplitAsText 
      callback={handleSelectDropdown}
      headerText={t('Schedule')}
      items={schedules}
      selectedItem={getDropdownItemByEventKey(projectId,schedules)}
      {...rest}
    />
  )
}