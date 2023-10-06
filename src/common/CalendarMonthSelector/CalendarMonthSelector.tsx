import { useCallback, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { dateAdd, dateFormat, dateStartOf, dateSubtract } from 'helpers'
import { Tip } from 'common/Tip'

type Props = {
  children(currentMonth: string): JSX.Element
  initialDate: string;
}

export function CalendarMonthSelector({ children, initialDate }: Props): JSX.Element {
  const [ currentMonth, setCurrentMonth ] = useState(dateStartOf(initialDate,'month'))

  const handleClickPrev = useCallback((): void => {
    setCurrentMonth(dateSubtract(currentMonth,1,'month'))
  },[currentMonth])

  const handleClickNext = useCallback((): void => {
    setCurrentMonth(dateAdd(currentMonth,1,'month'))
  },[currentMonth])

  const resetMonthToDate = useCallback((): void => {
    if(initialDate) setCurrentMonth(initialDate)
  },[initialDate])

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <Button size='sm' variant='light' onClick={handleClickPrev}><FaArrowLeft /></Button>
        <Tip text='Click to reset to start date'>
          <div className='lead pointer' onClick={resetMonthToDate}>{dateFormat(currentMonth,'MMMM yyyy')}</div>
        </Tip>
        <Button size='sm' variant='light' onClick={handleClickNext}><FaArrowRight /></Button>
      </div>
      {children(currentMonth)}
    </>
  )
}
