import { isEqual } from 'date-fns'

import { dateFromISO } from 'helpers'

export function isDateSame(iso1?: string, iso2?: string): boolean {
  if(!iso1 || !iso2) return false
  const date1 = dateFromISO(iso1)
  const date2 = dateFromISO(iso2)
  return isEqual( date1, date2 )
}