import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { TbCopy } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'

import { Tip } from 'common'
import { useAppSelector } from 'store/hooks'

type Props = {
  boardId: string;
}

export function BoardButtonDuplicate({ boardId }: Props): JSX.Element {
  const temp_boards = useAppSelector(state=>state.local.temp_boards)
  const selectedIds = useAppSelector(state=>state.local.sch_breakdown_selectedIds)
  const { t } = useTranslation()

  const board = temp_boards[boardId]
  const isAllSelectedInBoard = selectedIds.every(i=>board.includes(i))
  const disabled = isAllSelectedInBoard ? selectedIds.length<1 : true

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <Tip text={t('Duplicate')}>
      <Nav.Item as={Button} size='sm' variant='info' disabled={disabled} onClick={handleClick}>
        <TbCopy size='1.2em' />
      </Nav.Item>
    </Tip>
  )
}
