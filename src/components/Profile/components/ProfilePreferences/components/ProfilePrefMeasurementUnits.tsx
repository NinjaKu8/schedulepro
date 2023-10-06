import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ProfilePrefItem } from './index'
import { DropdownTC } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { getDropdownItemByEventKey } from 'helpers'

const unitItems: IDropdownTCItem[] = [
  { eventKey: 'inches', value: 'Inches' },
  { eventKey: 'centimeters', value: 'Centimeters' },
  { eventKey: 'pixels', value: 'Pixels' },
  { eventKey: 'points', value: 'Points' },
]

export function ProfilePrefMeasurementUnits(): JSX.Element {
  const { t } = useTranslation()

  const handleSelect = useCallback((eventKey: string | null): void => {
    console.log(eventKey)
  },[])

  return (
    <ProfilePrefItem text={t('Measurement units')}>
      <DropdownTC
        align='end'
        callback={handleSelect}
        items={unitItems}
        selectedItem={getDropdownItemByEventKey('1', unitItems)} 
        size='sm' 
        toggleClassName='border border-2'
        variant='light'
      />
    </ProfilePrefItem>
  )
}
