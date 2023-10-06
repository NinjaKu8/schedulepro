import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'

import { useAppDispatch, useAppSelector } from 'store/hooks'
import { toggleIsProgressReportEdit } from 'store/slices/local'

export function ProgressReportsButtonEdit(): JSX.Element {
  const dispatch = useAppDispatch()
  const isProgressReportEdit = useAppSelector(state=>state.local.isProgressReportEdit)

  const handleClick = useCallback((): void => {
    dispatch(toggleIsProgressReportEdit())
  },[dispatch])

  return (
    <Button size='sm' variant='info' onClick={handleClick} active={isProgressReportEdit}>
      {isProgressReportEdit 
        ? <span>Save Edits</span>
        : <span>Edit Fields...</span>
      }
    </Button>
  )
}