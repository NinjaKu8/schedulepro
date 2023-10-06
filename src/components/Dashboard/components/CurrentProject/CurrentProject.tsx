import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { CurrentProjectInfo, CurrentProjectLinks } from './components'

const infoStyle = { minWidth: '15em' }

export function CurrentProject(): JSX.Element {
  return (
    <div>
      <div className='ms-3'>
        <h5>It's a Wonderful Life</h5>
      </div>
      <Card className='shadow overflow-hidden'>
        <Row>
          <Col style={infoStyle}>
            <CurrentProjectInfo />
          </Col>
          <Col style={infoStyle}>
            <CurrentProjectLinks />
          </Col>
        </Row>
      </Card>
    </div>
  )
}
