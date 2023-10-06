import { useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Trans } from 'react-i18next'

import { SectionSkewed } from 'common'
import { useIntersectionObserver } from 'hooks'

const landingInterfaceContainerStyle = { maxWidth: '60em', paddingBottom: '5em' }
const landingInterfaceImageStyle  = { top: '50px', right: '-100px', zIndex: 1 }
const landingInterfaceContentStyle  = { zIndex: 2 }
const landingInterfaceBlobStyle  = { zIndex: 1 }

export function LandingInterface(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 1, freezeOnceVisible: true })
  
  const isVisible = !!entry?.isIntersecting

  return (
    <SectionSkewed color='#66C5FF' isRising>
      <Container className='position-relative' style={landingInterfaceContainerStyle}>
        <div className='position-relative d-none d-md-block'>
          <Image 
            src='assets/img/landing/macbook.png' 
            width='700' 
            style={landingInterfaceImageStyle} 
            className={`position-absolute fadein-left ${ isVisible ? 'is-visible' : '' }`} 
          />
        </div>
        <Row style={landingInterfaceContentStyle} ref={ref}>
          <Col md={4} className='d-flex flex-column gap-4 text-center-until-md'>
            <h2 className='fw-bold lh-base'>
              <Trans i18nKey='landing-interface-title'>Interface,<br/>streamlined.</Trans>
            </h2>
            <p className='lh-base'>
              <Trans i18nKey='landing-interface-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit.</Trans>
            </p>
            <Image src='assets/img/landing/blob2.png' style={landingInterfaceBlobStyle} className='d-none d-md-block drift2' width='175' height='125' />
          </Col>
          <Col>
            <Image src='assets/img/landing/blob1.png' style={landingInterfaceBlobStyle} className='d-none d-md-block drift1' width='358' height='295' />
          </Col>
        </Row>
        <Image src='assets/img/landing/macbook.png' className={`d-md-none fadein-left ${ isVisible ? 'is-visible' : '' }`} fluid />
      </Container>
    </SectionSkewed>
  )
}
