import { useCallback, useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { BsClock } from 'react-icons/bs'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { AutoInput, DropdownTC, Tip } from 'common'
import { useAppSelector } from 'store/hooks'

type Props = {
  value: string;
  callback: (value: string) => void;
}

const progressEventTypes: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'Start' },
  { eventKey: 'ABC124', value: 'First Shot' },
  { eventKey: 'ABC125', value: 'Meal Start' },
  { eventKey: 'ABC126', value: 'Meal End' },
  { eventKey: 'ABC127', value: 'Wrap' },
]

export function ProgressReportsTimesRowValue({ callback, value }: Props): JSX.Element {
  const isProgressReportEdit = useAppSelector(state=>state.local.isProgressReportEdit)

  const [ time, setTime ] = useState<string>(value)

  const handleClickNow = useCallback((): void => {
    const now = new Date()
    var time = `${now.getHours()}:${now.getMinutes()}`
    setTime(time)
  },[setTime])

  const handleSelectType = useCallback((value: string | null): void => {
    console.log('handleSelectType', value)
  },[])

  return (
    !isProgressReportEdit
      ? <InputGroup size='sm'>
          <AutoInput 
            className='text-center'
            callback={callback} 
            disabled={isProgressReportEdit}
            value={time} 
          />
          <Tip text='Now'>
            <Button variant="info" disabled={isProgressReportEdit}>
              <BsClock onClick={handleClickNow} />
            </Button>
          </Tip>
        </InputGroup>
      : <DropdownTC 
          items={progressEventTypes} 
          selectedItem={progressEventTypes[0]} 
          callback={handleSelectType} 
          toggleClassName='w-100'
          variant='info'
          size='sm'
        />
  )
}