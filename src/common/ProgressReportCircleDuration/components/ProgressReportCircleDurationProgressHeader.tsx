import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { DropdownSplitAsText } from 'common'
import { getDropdownItemByEventKey } from 'helpers'

const schedules: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'Revised Blue Schedule - 7/6/22' },
  { eventKey: 'ABC124', value: 'Revised Pink Schedule - 7/22/22' },
  { eventKey: 'ABC125', value: 'Revised Yellow Schedule - 8/17/22' },
  { eventKey: 'ABC126', value: 'Revised Green Schedule - 9/2/22' },
]
const boards: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'First Unit' },
  { eventKey: 'ABC124', value: 'Second Unit' },
  { eventKey: 'ABC125', value: 'VFX Unit' },
  { eventKey: 'ABC126', value: 'Belfast Unit' },
]
const days: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'Day 7 of 45' },
  { eventKey: 'ABC124', value: 'Day 8 of 45' },
  { eventKey: 'ABC125', value: 'Day 9 of 45' },
  { eventKey: 'ABC126', value: 'Day 10 of 45' },
]

export function ProgressReportCircleDurationProgressHeader(): JSX.Element {
  const { t } = useTranslation()

  const handleSelectSchedule = useCallback((value: string | null): void => {
    console.log('dropdown select', value)
  },[])

  const handleSelectBoard = useCallback((value: string | null): void => {
    console.log('dropdown select', value)
  },[])

  const handleSelectDay = useCallback((value: string | null): void => {
    console.log('dropdown select', value)
  },[])

  return (
    <div className='d-flex flex-column flex-md-row justify-content-between mb-2'>
      <DropdownSplitAsText 
        callback={handleSelectSchedule}
        headerText={t('Current Schedule')}
        items={schedules}
        selectedItem={getDropdownItemByEventKey('ABC123',schedules)}
      />
      <DropdownSplitAsText 
        callback={handleSelectBoard}
        headerText={t('Current Board')}
        items={boards}
        selectedItem={getDropdownItemByEventKey('ABC123',boards)}
      />
      <DropdownSplitAsText 
        callback={handleSelectDay}
        headerText={t('Shoot Day')}
        items={days}
        selectedItem={getDropdownItemByEventKey('ABC123',days)}
      />
    </div>
  )
}