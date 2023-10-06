import { getDay } from 'date-fns'

import { dateFromISO } from 'helpers'

export function dateDayOfWeek(iso:string): number {
  const date = dateFromISO(iso)
  return getDay(date)
}