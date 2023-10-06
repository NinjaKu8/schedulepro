import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Trans, useTranslation } from 'react-i18next'

import { GradientBackground } from 'common'

const landingContainerStyle = { maxWidth: '80em' }
const headerShapeStyle = { top: 0, left: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw))', zIndex: 0 }
const headerContentStyle = { marginTop: '4em', paddingLeft: '3em', paddingRight: '3em', zIndex: 1 }

export function LandingHeader(): JSX.Element {
  const { t, i18n } = useTranslation()
  const isTitleWide = ['sv','no','fi'].includes(i18n.language) // some language's title text is wider than english
  return (
    <section className='landing-header'>
      <div className='position-absolute w-100' style={headerShapeStyle}>
        <GradientBackground className='landing-header__gradient' />
      </div>
      <div className='position-relative' style={headerContentStyle}>
        <Container style={landingContainerStyle}>
          <Row>
            <Col md={isTitleWide ? 5 : 4}>
              <Row className='pb-5'>
                <Col>
                  <div className='text-center-until-md'>
                    <h1 className='d-none'>Think Crew</h1>
                    <h2 className='display-5 fw-bold text-shadow text-light'>
                      <Trans i18nKey='landing-header-title1'>The best<br/>scheduling app</Trans>
                    </h2>
                    <h4 className='text-shadow text-light'>
                      <Trans i18nKey='landing-header-title2'>for series and feature film production</Trans>
                    </h4>
                  </div>
                </Col>
              </Row>
              <Row className='mt-6 mt-md-5'>
                <Col>
                  <div className='d-flex justify-content-center justify-content-md-start'>
                    <Button 
                      className='text-light py-4 px-5 rounded-pill border-0 shadow text-center gradient-background shadow-lg'
                      variant="primary" 
                      size="lg" 
                    >
                      <span className='small'>{t('Join Now for Free')}</span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={isTitleWide ? 7 : 8} className='d-none d-md-block'>
              <div className='drift-y p-4 bg-light bg-opacity-50 rounded shadow-lg'>
                <Image src="/assets/img/landing/schedule.png" alt='schedule image' fluid rounded />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
