
import { breakdowns } from 'common/StripSimple/components/StripSimpleBreakdownField'
import { ProgressReportStripDurationStrip } from './index'

export function ProgressReportRowBody(): JSX.Element {
  return (
    <div className='flex-fill d-flex flex-column'>
      {breakdowns.map((breakdown,i)=>(
        <ProgressReportStripDurationStrip key={breakdown.id} breakdownId={breakdown.id} hasBorder={i<breakdowns.length-1} />
      ))}
    </div>
  )  
}