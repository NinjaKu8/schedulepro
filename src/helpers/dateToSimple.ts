
import { dateFormat } from 'helpers'

export function dateToSimple(iso: string): string {
  return dateFormat(iso,'yyyy-MM-dd')
}