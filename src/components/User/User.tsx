import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Navigation, PageWrapper } from 'common'
import { UserMenuBar, UserInfo } from './components'
import { UserProjects } from './components/UserProjects'

export default function User(): JSX.Element {
  const params = useParams()
  const userId = params.id as string
  console.log("🚀 ~ file: User.tsx ~ line 14 ~ User ~ userId", userId)

  return (
    <div className='d-flex flex-column h-100'>
      <Navigation>
        <UserMenuBar />
      </Navigation>
      <PageWrapper>
        <Container>
          <Row>
            <Col lg={3} className='flex-lg-row'>
              <UserInfo />
            </Col>
            <Col lg={9} className='d-flex flex-column gap-2'>
              <UserProjects />
            </Col>
          </Row>
        </Container>
      </PageWrapper>
    </div>
  )
}
