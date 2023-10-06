import { format } from 'date-fns'

import { dateTimeFromISO } from 'helpers'

export function dateTimeFormat(iso: string, formatString: string ="yyyy-MM-dd'T'HH:mm:ss'Z'"): string {
  const date = dateTimeFromISO(iso)
  return format(date, formatString)
}