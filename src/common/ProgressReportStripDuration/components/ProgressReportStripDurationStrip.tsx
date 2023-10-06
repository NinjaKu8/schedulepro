
import { StripSimple } from 'common'
import { breakdowns } from 'common/StripSimple/components/StripSimpleBreakdownField'

type Props = {
  breakdownId: string;
  hasBorder: boolean;
}

const lengthMilliseconds = 12 * 3600000

export function ProgressReportStripDurationStrip({ breakdownId, hasBorder }: Props): JSX.Element {
  const breakdown = breakdowns.find(b=>b.id===breakdownId)

  const height = breakdown?.duration ? lengthMilliseconds / breakdown.duration : null
  const stripStyle = { height: height ? `calc(34em / ${height})` : 'inherit' }
  const isThin = height && height>12

  return (
    <>
      {breakdown &&
        <div 
          className={`border-dark overflow-hidden transition ${hasBorder && 'border-bottom'} ${isThin && 'thin-strip'}`} 
          style={stripStyle}
        >
          <StripSimple 
            breakdownId={breakdown.id}
            className={`h-100 w-100 ${breakdown.isComplete ? 'bg-secondary-25' : breakdown.className}`}
            gridName='strip-simple-progress-detailed'
            hasDescription={false}
          />
        </div>
      }
    </>
  )
}