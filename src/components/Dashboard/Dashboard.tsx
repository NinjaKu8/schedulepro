import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTranslation } from 'react-i18next'

import { Navigation, PageWrapper, PageHeader } from 'common'
import { useToggle } from 'hooks'
import { Blog, CurrentProject, DashboardProgressReport, Recent, Videos, Weather, Welcome } from './components'

export default function Dashboard(): JSX.Element {
  const [ showWelcome, toggleWelcome] = useToggle(true)
  const { t } = useTranslation()

  return (
    <div className='d-flex flex-column h-100'>
      <Navigation />
      <PageWrapper>
        <PageHeader>{t('Hello')} Michael</PageHeader>

        {showWelcome &&
          <div className='pb-4'>
            <Welcome toggleWelcome={toggleWelcome} />
          </div>
        }

        <Row className='pb-4'>
          <Col lg={8} xl={6} className='d-flex flex-column gap-4 pe-lg-4 mb-4'>

            <DashboardProgressReport />
            <Blog />

          </Col>
          <Col lg={4} xl={6} className='d-flex flex-column gap-4 ps-lg-4'>

            <CurrentProject />
            <Weather />
            <Recent />
            <Videos />

          </Col>
        </Row>
      </PageWrapper>
    </div>
  )
}
