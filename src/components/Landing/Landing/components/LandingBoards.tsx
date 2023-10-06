import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Trans, useTranslation } from 'react-i18next'

const landingBoardsContainerStyle = { maxWidth: '60em', marginTop: '10em' }

export function LandingBoards(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Container style={landingBoardsContainerStyle}>
      <Row>
        <Col md={4} className='d-flex flex-column justify-content-md-center ps-4'>
          <div className='text-center-until-md'>
            <h2 className='fw-bold lh-base'>{t('Blockshoot with multiple stripboards')}</h2>
            <p className='lh-base'>
              <Trans i18nKey='landing-boards'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit.
              </Trans>
            </p>
          </div>
        </Col>
        <Col md={8} className='mb-4 mb-md-0'>
          <Image src='assets/img/landing/macbook.png' rounded fluid />
        </Col>
      </Row>
    </Container>
  )
}
