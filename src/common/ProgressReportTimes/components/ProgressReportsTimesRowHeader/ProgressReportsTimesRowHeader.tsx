import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PopoverInfo } from 'common'

export function ProgressReportsTimesRowHeader(): JSX.Element {
  return (
    <Row className='d-flex'>
      <Col md={6} className='d-flex align-items-center'>
        <p className='mb-0'>Edit Label Names</p>
      </Col>
      <Col md={6} className='d-flex justify-content-between align-items-center'>
        <p className='mb-0'>Data Value Type</p>
        <PopoverInfo>
          For each label, please use the dropdowns to let us know what type of data will be entered. This will help us give you metrics for your project.
        </PopoverInfo>
      </Col>
    </Row>
  )
}