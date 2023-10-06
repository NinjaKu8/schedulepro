import { endOfMonth, endOfWeek } from 'date-fns'

import { dateFromISO, dateToISO } from 'helpers'

export function dateEndOf(iso: string, type: string ='week'): string {
  const date = dateFromISO(iso)
  switch(type) {
    case 'month': return dateToISO(endOfMonth(date))
    default: return dateToISO(endOfWeek(date))
  }
}