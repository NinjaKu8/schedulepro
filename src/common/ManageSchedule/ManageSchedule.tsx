import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTranslation } from 'react-i18next'

import { ManageUsers } from 'common'
import { ManageScheduleDescription, ManageScheduleName, ManageScheduleEpisode, ManageScheduleRevisionColor, ManageScheduleRevisionDate, ManageScheduleScripts, ManageScheduleSeason } from './components'

export function ManageSchedule(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex flex-column gap-3'>
      <ManageScheduleName />
      <ManageScheduleDescription />
      <Row>
        <Col>
          <ManageScheduleSeason />
        </Col>
        <Col>
          <ManageScheduleEpisode />      
        </Col>
      </Row>
      <Row>
        <Col>
          <ManageScheduleRevisionColor />
        </Col>
        <Col>
          <ManageScheduleRevisionDate />        
        </Col>
      </Row>
      <ManageScheduleScripts /> 
      <div>
        <Form.Label className='text-muted small'>{t('Users')}</Form.Label>
        <ManageUsers /> 
      </div> 
    </div>
  )
}
