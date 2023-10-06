
import { ChartPie, StripSimple } from "common"
import { convertFloatToEighths, formatDuration, formatPages } from "helpers"
import { breakdowns } from "common/StripSimple/components/StripSimpleBreakdownField"

const data = breakdowns.map(b => ({ // temp
  ...b,
  id: b.sc,
  label: b.sc,
  value: b.duration,
  color: scToColor(b.sc),
}))

const tooltipStyle = { width: '20em', maxHeight: '5em' }

// temp
function scToColor(sc: string): string {
  switch(sc) {
    case '102APT2':
      return '#50CE65'
    case '10':
      return '#FFB03A'
    case '3':
      return '#FFB03A'
    case '123':
      return '#8378ff'
    case '67':
      return '#FFB03A'
    case '42':
      return '#FFB03A'
    case '78':
      return '#8378ff'
    default:
      return '#9197B0'
  }
}

const fill = [
  { match: { id: '102APT1' }, id: 'dots' },
  { match: { id: '10' }, id: 'lines' },
]

const tooltip = ({ datum }: any): JSX.Element => {
  const pages = convertFloatToEighths(datum.data.pgs)
  const formattedPages = formatPages(pages)
  return (
    <div className={`rounded shadow overflow-hidden small ${datum.data.className}`} style={tooltipStyle}>
      <StripSimple 
        gridName='strip-simple'
        sc={datum.data.sc}
        pages={formattedPages}
        slugline={datum.data.slugline}
        hasStatus={false}
        hasCheckbox={false}
      />
    </div>
  )
}

export function ProgressReportCircleDuration(): JSX.Element {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex flex-column overflow-hidden'>
        <ChartPie 
          data={data} 
          valueFormat={formatDuration} 
          fill={fill}
          startAngle={-140}
          endAngle={140}
          tooltip={tooltip}
        />
      </div>
    </div>
  )
}