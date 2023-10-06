
import { convertFloatToEighths, formatPages } from 'helpers';
import { breakdowns } from './StripSimpleBreakdownField'

type Props = {
  breakdownId: string;
}

export function StripSimpleBreakdownPages({ breakdownId }: Props): JSX.Element {
  const breakdown = breakdowns.find(b => b.id === breakdownId)

  const pages = convertFloatToEighths(breakdown?.pgs)
  const formattedPages = formatPages(pages)

  return (
    <>
      {formattedPages}
    </>
  )
}