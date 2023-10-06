
import { ProgressReportRowHeader, ProgressReportRowFooter, ProgressReportRowBody } from './components'
import { Ruler } from 'common'

export function ProgressReportStripDuration(): JSX.Element {
  return (
    <div className='d-flex flex-column rounded overflow-hidden shadow h-100'>
      <ProgressReportRowHeader />
      <div className='d-flex h-100'>
        <div>
          <Ruler unit='time' className='bg-dark text-light' />
        </div>
        <ProgressReportRowBody />
      </div>
      <ProgressReportRowFooter />
    </div>
  )
}