import { useCallback } from 'react'

import { DropdownTC } from 'common'
import { IDropdownTCItem } from "common/DropdownTC/DropdownTC"

const filterElementItems: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'First Draft' },
  { eventKey: 'ABC124', value: 'Second Draft' },
  { eventKey: 'ABC125', value: 'Third Draft' },
  { eventKey: 'ABC126', value: 'Fourth Draft' },
  { eventKey: 'ABC127', value: 'Fifth Draft' },
]

export function ProgressReportsDropdownSchedule(): JSX.Element {

  const handleSelect = useCallback((e: string | null): void => {
    console.log(e)
  },[])

  return (
    <DropdownTC 
      size='sm'
      variant='info'
      callback={handleSelect}
      items={filterElementItems}
      selectedItem={filterElementItems[0]}
    />
  )
}
