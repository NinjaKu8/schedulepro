import { subDays, subMonths } from 'date-fns'

import { dateFromISO, dateToISO } from 'helpers'

export function dateSubtract(iso: string, amount: number =1, type: string ='day'): string {
  const date = dateFromISO(iso)
  switch(type) {
    case 'month': return dateToISO(subMonths(date, amount))
    default: return dateToISO(subDays(date, amount))
  }
}