
import { CalendarMonthSelector } from 'common'
import { DoodCalendarContainer, DoodCalendarDays, DoodCalendarDaysOfWeek } from './components'

export function DoodCalendar(): JSX.Element {
  return (
      <div className='d-flex flex-column m-3 p-3 h-100 overflow-hidden rounded shadow'>
        <CalendarMonthSelector initialDate='2023-03-16T00:00:00.000'>
          {(isoMonth)=>(
            <>
              <DoodCalendarDaysOfWeek />

              <div className='overflow-auto'>
                <DoodCalendarContainer>
                  <DoodCalendarDays containerId='doodcalendar' month={isoMonth} />
                </DoodCalendarContainer>
              </div>
            </>
          )}
        </CalendarMonthSelector>
      </div>
  )
}
