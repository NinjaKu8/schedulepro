
import { StripSimple } from 'common'
import { breakdowns } from 'common/StripSimple/components/StripSimpleBreakdownField'

export function ProgressReportRowBody(): JSX.Element {
  return (
    <div className='flex-fill d-flex flex-column'>
      {breakdowns.map((breakdown,i)=>{
        return (
          <div 
            key={breakdown.id} 
            className={`border-dark overflow-hidden ${i<breakdowns.length-1 && 'border-bottom'}`} 
          >
            <StripSimple 
              breakdownId={breakdown.id}
              className={`h-100 w-100 py-2 ${breakdown.isComplete ? 'bg-secondary-25' : breakdown.className}`}
              gridName='strip-simple-progress'
              hasDuration={false}
            />
          </div>
        )
      })}
    </div>
  )  
}