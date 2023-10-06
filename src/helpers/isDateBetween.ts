import { isWithinInterval } from 'date-fns'

import { dateFromISO } from 'helpers'

export function isDateBetween(iso: string, iso1: string, iso2: string): boolean {
  const day = dateFromISO(iso)
  const date1 = dateFromISO(iso1)
  const date2 = dateFromISO(iso2)
  return isWithinInterval(day, { start: date1, end: date2 })
}
