import { ReactNode } from 'react'
import Card from 'react-bootstrap/Card'

import { useAppSelector } from 'store/hooks'
import { ProgressReportStrips, CardSelectable, ProgressReportWaffleOverview, ProgressReportStripDuration, DropdownVisualizations, ProgressReportCircleDuration, DropdownBoardsAsText, ProgressReportTimes } from 'common'
import { IProgressReport } from 'types/types'

type Props = {
  progressReportId: string;
}

const visualizations: {[x:string]: ReactNode} = {
  stripProgress: <ProgressReportStrips />,
  waffleOverview: <ProgressReportWaffleOverview />,
  stripDurationProgress: <ProgressReportStripDuration />,
  circleDurationProgress: <ProgressReportCircleDuration />,
}

export function ProgressReportsListItem({ progressReportId }: Props): JSX.Element {
  const progressReports: IProgressReport[] = useAppSelector(state=>state.local.temp_progressreports)
  const progressReport = progressReports.find(p=>p._id===progressReportId)
  const component = progressReport ? visualizations[progressReport?.visualizationId] : null

  return (
    <>
      {progressReport && component &&
        <div className='d-flex flex-column'>
          <h5><DropdownBoardsAsText boardGroupId='ABC123' /></h5>
          <CardSelectable className='shadow' color='primary'>
            <Card.Body className='d-flex flex-column gap-3'>
              <ProgressReportTimes />
              <DropdownVisualizations progressReportId={progressReport._id} />
              {component}
            </Card.Body>
          </CardSelectable>
        </div>
      }
    </>
  )
}