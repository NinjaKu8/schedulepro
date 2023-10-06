import { differenceInDays } from 'date-fns'

import { dateFromISO } from 'helpers'

export function dateDiff(iso1: string, iso2: string): number {
  const date1 = dateFromISO(iso1)
  const date2 = dateFromISO(iso2)
  return differenceInDays(date1, date2)
}