import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTranslation } from 'react-i18next'

import { ManageUsers } from 'common'
import { ManageScriptName, ManageScriptDescription, ManageScriptSeason, ManageScriptEpisode, ManageScriptRevisionColor, ManageScriptRevisionDate } from './components'

export function ManageScript(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex flex-column gap-3'>
      <ManageScriptName />
      <ManageScriptDescription />
      <Row>
        <Col>
          <ManageScriptSeason />
        </Col>
        <Col>
          <ManageScriptEpisode />       
        </Col>
      </Row>
      <Row>
        <Col>
          <ManageScriptRevisionColor />
        </Col>
        <Col>
          <ManageScriptRevisionDate />        
        </Col>
      </Row>
      <div>
        <Form.Label className='text-muted small'>{t('Users')}</Form.Label>
        <ManageUsers />
      </div>
    </div>
  )
}
