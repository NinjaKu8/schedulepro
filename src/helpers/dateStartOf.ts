import { startOfMonth, startOfWeek } from 'date-fns'

import { dateToISO, dateFromISO } from 'helpers'

export function dateStartOf(iso: string, type: string ='week'): string {
  const date = dateFromISO(iso)
  switch(type) {
    case 'month': return dateToISO(startOfMonth(date))
    default: return dateToISO(startOfWeek(date))
  }
}