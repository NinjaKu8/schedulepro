import classnames from 'classnames'
import Button from 'react-bootstrap/Button'
import { BsSortAlphaDown, BsSortAlphaDownAlt } from 'react-icons/bs'

import { useAppSelector } from 'store/hooks'
import { ManagerListColumn, ManagerListItem } from "common"
import { DNDItem, DNDItems } from "types/types"
import React, { useCallback } from 'react'

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

type Categories = {
  id: string;
  name: string;
  asc: boolean;
}
const categories: Categories[] = [
  {id: '0', name: 'Script Day', asc: true},
  {id: '1', name: 'Unit', asc: true},
  {id: '2', name: 'Sequence', asc: true},
  {id: '3', name: 'Location', asc: false},
  {id: '4', name: 'Set', asc: true},
  {id: '5', name: 'INT/EXT', asc: true},
  {id: '6', name: 'Day/Night', asc: true},
  {id: '7', name: 'Scene', asc: false},
]

export function SortItem({ id, isSelected }: Props): JSX.Element {
  const items: DNDItems = useAppSelector(state=>state.local.sch_sort)
  const isInSortOrder = items.sortorder.includes(id)
  const category = categories.find(e=>e.id===id)

  const handleOnClick = useCallback((e: React.MouseEvent): void => {
    e.preventDefault()
    console.log('handleOnClick', id)
  },[id])

  return (
    <>
      {category &&
        <ManagerListItem className={classnames('d-flex align-items-center', isInSortOrder ? 'bg-primary' : 'bg-light')} isSelected={isSelected}>
          <ManagerListColumn size='full'>
            {category.name}
          </ManagerListColumn>
          {isInSortOrder && 
            <ManagerListColumn size='sm' className='text-end'>
              <Button variant='light' size='sm' className='p-1 w-100 text-primary' onClick={handleOnClick}>
                {category.asc ? <BsSortAlphaDown /> : <BsSortAlphaDownAlt /> }
              </Button>
            </ManagerListColumn>
          }
        </ManagerListItem>
      }
    </>
  )
}
