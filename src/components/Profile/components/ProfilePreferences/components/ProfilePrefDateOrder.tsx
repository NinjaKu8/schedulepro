import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ProfilePrefItem } from './index'
import { DropdownTC } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { getDropdownItemByEventKey } from 'helpers'

const dateItems: IDropdownTCItem[] = [
  { eventKey: 'm-d-yy', value: 'M / D / YY' },
  { eventKey: 'd-m-yy', value: 'D / M / YY' },
  { eventKey: 'yy-m-d', value: 'YY / M / D' },
  { eventKey: 'yy-d-m', value: 'YY / D / M' },
]

export function ProfilePrefDateOrder(): JSX.Element {
  const { t } = useTranslation()

  const handleSelect = useCallback((eventKey: string | null): void => {
    console.log(eventKey)
  },[])

  return (
    <ProfilePrefItem text={t('Date order')}>
      <DropdownTC
        align='end'
        callback={handleSelect}
        items={dateItems}
        selectedItem={getDropdownItemByEventKey('1', dateItems)} 
        size='sm' 
        toggleClassName='border border-2'
        variant='light'
      />
    </ProfilePrefItem>
  )
}
