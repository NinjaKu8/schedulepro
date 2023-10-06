import { format } from 'date-fns' //, Locale
// import { es, fr, de, pt, it, nl, sv, fi } from 'date-fns/locale'

import { dateFromISO } from 'helpers' //, i18n

// const locales: {[x:string] : Locale} = { es, fr, de, pt, it, nl, sv, fi }

export function dateFormat(iso: string, formatString: string ="yyyy-MM-dd'T'HH:mm:ss'Z'"): string {
  const date = dateFromISO(iso)
  if(!date) return ''
  return format(date, formatString)
}

/*
, {
    locale: locales[i18n.resolvedLanguage]
  }
*/