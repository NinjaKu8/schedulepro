
import { formatDuration } from 'helpers';
import { breakdowns } from './StripSimpleBreakdownField'

type Props = {
  breakdownId: string;
}

export function StripSimpleBreakdownDuration({ breakdownId }: Props): JSX.Element {
  const breakdown = breakdowns.find(b => b.id === breakdownId)

  const formattedDuration = breakdown?.duration !== undefined ? formatDuration(breakdown.duration) : undefined

  return (
    <>
      {formattedDuration}
    </>
  )
}