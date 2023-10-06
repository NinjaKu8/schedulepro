import { useCallback, useState } from 'react'

import { CalendarDays, CalendarDaysOfWeek, CalendarMonthSelector } from 'common'
import { dateNow, multiSelectDates } from 'helpers'
import { CalendarButtons, CalendarContent } from './components'

export function Calendar(): JSX.Element {
  const [ selectedDays, setSelectedDays ]= useState<string[]>([])

  const handleClickDayOfWeek = useCallback((value: string): void => {
    console.log('day of week click',value)
  },[])

  const handleClickDay = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    const isoDate = e.currentTarget.dataset.isodate
    if(!isoDate) return
    const multiSelector = e.shiftKey ? 'shift' : e.metaKey ? 'meta' : e.altKey ? 'alt' : undefined
    const newSelectedDays = selectedDays.length===1 && selectedDays[0]===isoDate
      ? [] // unselect all if clicking on only selected date
      : multiSelectDates(isoDate, selectedDays, multiSelector)
    setSelectedDays(newSelectedDays)
  },[setSelectedDays, selectedDays])
  
  return (
    <div className='d-flex flex-column gap-2 p-2 rounded shadow-sm w-100 user-select-none'>
      <CalendarMonthSelector
        initialDate={dateNow()}
      >
        {(isoMonth)=>(
          <>
            <CalendarDaysOfWeek 
              callback={handleClickDayOfWeek}
              className='rounded-1 flex-1 m-1 text-center pointer' 
            />
            <CalendarDays isoDate={isoMonth} className='d-flex'>
              {({ date, disabled, dayOfWeek })=>(
                <CalendarContent 
                  callback={handleClickDay} 
                  date={date} 
                  dayOfWeek={dayOfWeek} 
                  disabled={disabled} 
                  isSelected={selectedDays.includes(date)}
                />
              )}
            </CalendarDays>
            <CalendarButtons />
          </>
        )}
      </CalendarMonthSelector>
    </div>
  )
}
