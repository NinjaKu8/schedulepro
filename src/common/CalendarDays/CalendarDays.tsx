import { Fragment } from 'react'

import { useCalendarMonth } from 'hooks'
import { ICalendarWeek } from 'hooks/useCalendarMonth'

type Props = {
  children(day: ICalendarWeek): JSX.Element;
  className?: string;
  isoDate: string; 
}

export function CalendarDays({ children, className, isoDate }: Props): JSX.Element {
  const calendarWeeks: ICalendarWeek[][] = useCalendarMonth(isoDate)

  return (
    <div>
      {calendarWeeks?.map((week,w)=>(
        <div key={w} className={className}>
          {week.map((day,i)=>(
            <Fragment key={i}>
              {children(day)}
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}
