import { useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Trans, useTranslation } from 'react-i18next'

import { useIntersectionObserver } from 'hooks'

const landingCollaborateContainerStyle = { maxWidth: '60em' }
const landingCollaborateTextStyle = { maxWidth: '30em' }

export function LandingCollaborate(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: .5, freezeOnceVisible: true })
  const { t } = useTranslation()

  const isVisible = !!entry?.isIntersecting
  
  return (
    <Container style={landingCollaborateContainerStyle}>
      <div className='d-flex flex-column align-items-center'>
        <h2 className='fw-bold lh-base'>{t('Collaborate with your team')}</h2>
        <p className='lh-base' style={landingCollaborateTextStyle}>
          <Trans i18nKey='landing-collaborate'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit.
          </Trans>
        </p>
        <div ref={ref}>
          <Image src='assets/img/landing/collaborate.png' rounded fluid className={`fadein-up ${ isVisible ? 'is-visible' : '' }`} />
        </div>
      </div>
    </Container>
  )
}
