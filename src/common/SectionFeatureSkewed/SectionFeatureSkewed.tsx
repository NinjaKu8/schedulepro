import { ReactNode, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { GradientAccent, SectionSkewed } from 'common'
import { useIntersectionObserver } from 'hooks'

type Props = {
  blob1?: boolean;
  blob2?: boolean;
  blob3?: boolean;
  children: ReactNode;
  img: string;
  isRising?: boolean;
  title: string;
}

const containerStyle = { maxWidth: '65em'}
const SectionFeatureSkewedImage1Style = { top: '-80px', right: '62%', zIndex: 0 }
const SectionFeatureSkewedImage2Style = { top: '-80px', right: '-90px', zIndex: 0 }
const SectionFeatureSkewedImage3Style = { top: '-80px', right: '42%', zIndex: 0 }
const SectionFeatureSkewedContentStyle = { zIndex: 1 }

export function SectionFeatureSkewed({ children, title, img, blob1=false, blob2=false, blob3=false, isRising=false }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: .5, freezeOnceVisible: true })
  const isVisible = !!entry?.isIntersecting
  return (
    <SectionSkewed color='#F3F4F9' isRising={isRising}>
      <Container className='position-relative' style={containerStyle}>
        {blob1 &&
          <div className='position-relative d-none d-md-block'>
            <Image src='assets/img/landing/blob3.png' className='position-absolute opacity-25 drift1' width='200' style={SectionFeatureSkewedImage1Style} />
          </div>
        }
        {blob2 &&
          <div className='position-relative d-none d-md-block'>
            <Image src='assets/img/landing/blob4.png' className='position-absolute opacity-25 drift2' width='300' style={SectionFeatureSkewedImage2Style} />
          </div>
        }        
        {blob3 &&
          <div className='position-relative d-none d-md-block'>
            <Image src='assets/img/landing/blob1.png' className='position-absolute opacity-25 drift3' width='300' style={SectionFeatureSkewedImage3Style} />
          </div>
        }        
        <Row className='position-relative' style={SectionFeatureSkewedContentStyle}>
          <Col md={5} className='d-flex flex-column justify-content-center'>
            <h3 className='fw-bold mb-2 display-6 lh-base'>{title}</h3>
            <p className='lh-base'>
              {children}
            </p>
          </Col>
          <Col md={7} className='pb-4 pb-md-0'>
            <div ref={ref}>
              <GradientAccent className={`rounded shadow-lg fadein-left ${ isVisible ? 'is-visible' : '' }`}>
                <Image src={img} fluid />
              </GradientAccent>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionSkewed>
  )
}
