import { useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Trans, useTranslation } from 'react-i18next'

import { useIntersectionObserver } from 'hooks'
import { SectionSkewed } from 'common'

const landingDoodContainerStyle = { maxWidth: '60em' }
const landingDoodContentStyle = { zIndex: 1 }
const landingDoodImageStyle  = { top: '-15px', right: '-100px' }

export function LandingDood(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: .5, freezeOnceVisible: true })
  const { t } = useTranslation()

  const isVisible = !!entry?.isIntersecting
  
  return (
    <SectionSkewed className='my-n8' color='#AA4DD4'>
      <Container className='position-relative' style={landingDoodContainerStyle}>
        <div className='position-absolute d-none d-md-block' style={landingDoodImageStyle}>
          <Image src='assets/img/landing/blob3.png' width='300' className='drift1' />
        </div>
        <Row ref={ref}>
          <Col md={8} className='mb-4 mb-md-0'>
            <Image src='assets/img/landing/collaborate.png' rounded fluid className={`fadein-right ${ isVisible ? 'is-visible' : '' }`} />
          </Col>
          <Col md={4} className='d-flex flex-column justify-content-md-center ps-4'>
            <div className='text-center-until-md' style={landingDoodContentStyle}>
              <h2 className='fw-bold lh-base text-light'>{t('Real time day out of days')}</h2>
              <p className='lh-base text-light'>
                <Trans i18nKey='landing-dood'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit.
                </Trans>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionSkewed>
  )
}
