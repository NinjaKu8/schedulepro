import { useCallback, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import { RxCrossCircled } from 'react-icons/rx'
import { useTranslation } from 'react-i18next'

import "react-datepicker/dist/react-datepicker.css"

const inputStyle = { width: '11em' }
const datePickerButton = { backgroundColor: '#f0f0f0' }

export function DoodDateRange(): JSX.Element {
  const { t } = useTranslation()

  const [startDate, setStartDate] = useState<Date|null>(new Date())
  const [endDate, setEndDate] = useState<Date|null>(null)

  const onChange = useCallback((dates: [Date, Date]): void => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  },[])

  const handleReset = useCallback((): void => {
    setStartDate(null)
    setEndDate(null)
  },[])

  return (
    <div>
      <DatePicker
        customInput={<Form.Control size='sm' className='mr-0 text-center' style={inputStyle} />}
        dateFormat='M/d/yy'
        disabledKeyboardNavigation
        endDate={endDate}
        // highlightDates={currentShootDates}
        onChange={onChange}
        selected={startDate}
        selectsRange
        startDate={startDate}
      >
        <div>
          <Button 
            className='d-block w-100 rounded-0 rounded-bottom border-0 bg-primary-50' 
            size='sm' 
            style={datePickerButton}
            onClick={handleReset}
          >
            <RxCrossCircled /> <span className='small'>{t('Reset dates')}</span>
          </Button>
        </div>
      </DatePicker>
    </div>
  )
}
