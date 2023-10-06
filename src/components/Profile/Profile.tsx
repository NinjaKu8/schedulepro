import { useTranslation } from 'react-i18next'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Navigation, PageHeader, PageWrapper } from 'common'
import { ProfileInfo, ProfileLinks, ProfilePassword, ProfilePreferences } from './components'

export default function Profile(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex flex-column h-100'>
      <Navigation />
      <PageWrapper>
        <PageHeader>{t('Edit Profile')}</PageHeader>
        <Row>
          <Col lg={6}>
            <ProfileInfo />
            <ProfileLinks />
          </Col>
          <Col lg={6}>
            <ProfilePassword />
            <ProfilePreferences />
          </Col>
        </Row>
      </PageWrapper>
    </div>
  )
}
