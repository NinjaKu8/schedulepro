
import { isDateSame, isDateBefore } from 'helpers'

export function isDateSameOrBefore(iso1: string, iso2: string): boolean {
  return isDateSame(iso1, iso2) || isDateBefore(iso1, iso2)
}
