import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useAppSelector } from 'store/hooks'
import { ProgressReportsListItem, ProgressReportsListItemAdd } from './components'
import { IProgressReportGroup } from 'types/types'

export function ProgressReportsList(): JSX.Element {
  const progressReportGroups: IProgressReportGroup[] = useAppSelector(state=>state.local.temp_progressreportgroups)
  const progressReportGroup = progressReportGroups.find(p=>p.projectId==='ABC123')

  return (
    <div className='d-flex flex-md-column gap-5 flex-wrap'>  
      <Row>
        {progressReportGroup?.progressReportIds.map(_id=>(
          <Col key={_id} xl={6} className='p-4'>
            <ProgressReportsListItem progressReportId={_id} />
          </Col>
        ))}
      </Row>
      <ProgressReportsListItemAdd />
    </div>
  )
}