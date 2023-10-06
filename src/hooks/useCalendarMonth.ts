import { useMemo } from 'react'
import _ from 'lodash'

import { dateStartOf, dateEndOf, isDateSameOrBefore, isDateBefore, isDateAfter, dateAdd } from 'helpers'

export interface ICalendarWeek {
  date: string;
  disabled: boolean;
  dayOfWeek: number;
}

export function useCalendarMonth(month: string|null): ICalendarWeek[][] {
  return useMemo(()=>{
    if(!month) return []
    const monthStart = dateStartOf(month, 'month')
    const monthEnd = dateEndOf(monthStart, 'month')
    const calendarPageStartDate = dateStartOf(monthStart, 'week')
    const calendarPageEndDate = dateEndOf(monthEnd, 'week')

    let date = calendarPageStartDate
    let i = 0
    const dates: Omit<ICalendarWeek,'dayOfWeek'>[] = []

    while(isDateSameOrBefore(date, calendarPageEndDate)) {
      if(i>1000) break // escape hatch
      const day = {
        date,
        disabled: isDateBefore(date, monthStart) || isDateAfter(date, monthEnd),
      }
      dates.push(day)
      date = dateAdd(date)
      i++
    }
    return _.chunk(dates, 7).map(week=>week.map((day,dayOfWeek)=>({...day, dayOfWeek})))
  },[month]) 
}