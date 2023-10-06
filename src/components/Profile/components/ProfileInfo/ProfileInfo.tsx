import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTranslation } from 'react-i18next'

import {
  ProfileInfoAbout,
  ProfileInfoFirstname,
  ProfileInfoLastname,
  ProfileInfoMiddlename,
  ProfileInfoPosition,
  ProfileInfoEmail,
  ProfileInfoPhone,
  ProfileInfoButtonViewPage,
  ProfileInfoImage,
} from './components'

export function ProfileInfo() {
  const { t } = useTranslation()
  return (
    <>
      <Card className="mb-4 shadow">
        <Card.Body>
          <Row>
            <Col lg={4}>
              <ProfileInfoImage />
            </Col>
            <Col lg={8} className="d-flex flex-column gap-2">
              <h5>{t('Info')}</h5>
              <Row>
                <Col md={4}>
                  <ProfileInfoFirstname />
                </Col>
                <Col md={4}>
                  <ProfileInfoMiddlename />
                </Col>
                <Col md={4}>
                  <ProfileInfoLastname />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <ProfileInfoPosition />
                </Col>
              </Row>
              <ProfileInfoAbout />
              <div className="d-flex flex-column gap-4 mt-md-3">
                <ProfileInfoEmail />
                <ProfileInfoPhone />
                <ProfileInfoButtonViewPage />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}
