import { useTranslation } from 'react-i18next'

import { StripSimple } from 'common'
import { convertFloatToEighths, formatDuration, formatPages } from 'helpers'
import { breakdowns } from 'common/StripSimple/components/StripSimpleBreakdownField'

const rulerOffsetStyle = { paddingLeft: '1.8em' }

export function ProgressReportRowFooter(): JSX.Element {
  const { t } = useTranslation()

  // temp until we get data from API
  const totalPgs = breakdowns.reduce((acc, breakdown) => acc + breakdown.pgs, 0) 
  const totalPages = totalPgs !== undefined ? convertFloatToEighths(totalPgs) : undefined
  const formattedPages = totalPages !== undefined ? formatPages(totalPages) : undefined

  // temp until we get data from API
  const totalDuration = breakdowns.reduce((acc, breakdown) => acc + breakdown.duration, 0) 
  const formattedDuration = totalDuration !== undefined ? formatDuration(totalDuration) : undefined

  // temp until we get data from API
  const totalComplete = breakdowns.reduce((acc, breakdown) => breakdown.isComplete ? acc + breakdown.pgs : acc, 0) 
  const totalCompletePages = totalComplete !== undefined ? convertFloatToEighths(totalComplete) : undefined
  const formattedCompletePages = totalCompletePages !== undefined ? formatPages(totalCompletePages) : undefined

  return (
    <div className='bg-dark text-light'>
      <StripSimple 
        checkbox={formattedCompletePages ? formattedCompletePages : ''}
        className='py-2'
        duration={formattedDuration}
        gridName='strip-simple-progress-detailed'
        pages={formattedPages ? formattedPages : ''}
        sc={t('Pages')}
        status={t('Complete')}
        style={rulerOffsetStyle}
      />
    </div>
  )
}