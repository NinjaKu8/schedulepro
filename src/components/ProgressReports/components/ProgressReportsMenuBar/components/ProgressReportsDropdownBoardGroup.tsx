import { useCallback } from 'react'

import { DropdownTC } from 'common'
import { IDropdownTCItem } from "common/DropdownTC/DropdownTC"

const filterElementItems: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'First Unit' },
  { eventKey: 'ABC124', value: 'Second Unit' },
  { eventKey: 'ABC125', value: 'VFX Plate Unit' },
  { eventKey: 'ABC126', value: 'Miniatures Unit' },
  { eventKey: 'ABC127', value: 'London Unit' },
]

export function ProgressReportsDropdownBoardGroup(): JSX.Element {

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
