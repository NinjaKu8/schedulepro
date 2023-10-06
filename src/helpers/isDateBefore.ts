import { isBefore } from 'date-fns'

import { dateFromISO } from 'helpers'

export function isDateBefore(iso1: string, iso2: string): boolean {
  const date1 = dateFromISO(iso1)
  const date2 = dateFromISO(iso2)
  return isBefore(date1, date2)
}
