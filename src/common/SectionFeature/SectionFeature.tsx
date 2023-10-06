import { ReactNode, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { GradientAccent } from 'common'
import { useIntersectionObserver } from 'hooks'

type Props = {
  children: ReactNode;
  title: string;
  img: string;
}

const containerStyle = { maxWidth: '65em'}

export function SectionFeature({ children, title, img }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: .5, freezeOnceVisible: true })
  const isVisible = !!entry?.isIntersecting
  return (
    <Container style={containerStyle}>
      <Row>
        <Col md={7} className='pb-4 pb-md-0'>
          <div ref={ref}>
            <GradientAccent className={`rounded shadow-lg fadein-right ${ isVisible ? 'is-visible' : '' }`}>
              <Image src={img} fluid />
            </GradientAccent>
          </div>
        </Col>
        <Col md={5} className='d-flex flex-column justify-content-center'>
          <h3 className='fw-bold mb-2 display-6'>{title}</h3>
          <p className='lh-base'>
            {children}  
          </p>
        </Col>
      </Row>
    </Container>
  )
}
