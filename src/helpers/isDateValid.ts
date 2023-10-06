import { isValid } from 'date-fns'

import { dateFromISO } from 'helpers'

export function isDateValid(iso: string): boolean {
  const date = dateFromISO(iso)
  return isValid(date)
}