
import { ProgressReportRowHeader, ProgressReportRowFooter, ProgressReportRowBody } from './components'

export function ProgressReportStrips(): JSX.Element {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex flex-column rounded overflow-hidden shadow'>
        <ProgressReportRowHeader />
        <ProgressReportRowBody />
        <ProgressReportRowFooter />
      </div>
    </div>
  )
}