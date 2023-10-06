import { useCallback, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { MdDragIndicator } from 'react-icons/md'
import { ImCancelCircle } from 'react-icons/im'

import { AutoInput, ButtonDelete } from 'common'
import { useAppSelector } from 'store/hooks'

type Props = {
  label: string;
}

export function ProgressReportsTimesRowLabel({ label }: Props): JSX.Element {
  const isProgressReportEdit = useAppSelector(state=>state.local.isProgressReportEdit)

  const [ labelValue, setLabelValue ] = useState<string>(label)

  const handleClickDelete = useCallback((): void => {
    console.log('delete')
  },[])

  const handleChangeLabel = useCallback((value: string): void => {
    setLabelValue(value)
  },[])

  return (
    isProgressReportEdit 
      ? <div className='d-flex gap-1 align-items-center w-100'>
          <MdDragIndicator className='text-secondary' />
          <AutoInput 
            callback={handleChangeLabel} 
            value={labelValue} 
            size='sm'
          />
          <ButtonDelete callback={handleClickDelete}>
            <ImCancelCircle className='text-danger' />
          </ButtonDelete>
        </div> 
      : <Form.Label className='mb-0 small'>{labelValue}</Form.Label>
  )
}