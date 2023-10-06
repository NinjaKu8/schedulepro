import { isAfter } from 'date-fns'

import { dateFromISO } from 'helpers'

export function isDateAfter(iso1: string, iso2: string): boolean {
  const date1 = dateFromISO(iso1)
  const date2 = dateFromISO(iso2)
  return isAfter(date1, date2)
}
