import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setSch_breakdown_selectedIds } from 'store/slices/local'
import { Tip } from 'common'
import { getNextItemInArray, getDNDContainerIdByChildId } from 'helpers'

export function BreakdownButtonNext(): JSX.Element {
  const temp_boards = useAppSelector(state=>state.local.temp_boards)
  const sch_breakdown_selectedIds = useAppSelector(state=>state.local.sch_breakdown_selectedIds)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    const itemId = sch_breakdown_selectedIds[sch_breakdown_selectedIds.length-1]
    const boardId = getDNDContainerIdByChildId({ dndItems: temp_boards, itemId })
    if(!boardId) return
    const id = getNextItemInArray({ arr: temp_boards[boardId] as string[], currentItem: itemId as string })
    if(!id) return
    dispatch(setSch_breakdown_selectedIds([id]))
  },[dispatch, sch_breakdown_selectedIds, temp_boards])

  return (
    <Tip text={t('Next Breakdown')}>
      <Nav.Item as={Button} size='sm' variant='info' onClick={handleClick}><FaArrowRight /></Nav.Item>
    </Tip>
  )
}
