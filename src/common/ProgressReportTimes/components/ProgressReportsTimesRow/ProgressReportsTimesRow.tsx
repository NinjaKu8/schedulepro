import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProgressReportsTimesRowLabel, ProgressReportsTimesRowValue } from './components'

type Props = {
  label: string;
  value: string;
  callback: (value: string) => void;
}

export function ProgressReportsTimesRow({ label, value, callback }: Props): JSX.Element {
  return (
    <Row className='d-flex'>
      <Col md={6} className='d-flex align-items-center'>
        <ProgressReportsTimesRowLabel label={label}/>
      </Col>
      <Col md={6}>
        <div className='ms-3 mb-3 mt-1 ms-md-0 mb-md-0 mt-md-0'>
          <ProgressReportsTimesRowValue callback={callback} value={value} />
        </div>
      </Col>
    </Row>
  )
}