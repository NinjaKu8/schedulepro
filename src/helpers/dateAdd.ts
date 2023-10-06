import { addDays, addMonths } from 'date-fns'

import { dateFromISO, dateToISO } from 'helpers'

export function dateAdd(iso: string, amount: number =1, type: string ='day'): string {
  const date = dateFromISO(iso)
  switch(type) {
    case 'month': return dateToISO(addMonths(date, amount))
    default: return dateToISO(addDays(date, amount))
  }
}