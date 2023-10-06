import { useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Trans, useTranslation } from 'react-i18next'

import { useIntersectionObserver } from 'hooks'
import { GradientAccent, SectionSkewed } from 'common'

const landingToolsSecondaryContainerStyle = { maxWidth: '60em', marginTop: '10em' }
const boxStyle = { maxWidth: '28em' }
const boxImageStyle = { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
const landingToolsSecondaryImage1Style = { top: '-9em', right: '-5em', zIndex: 0 }
const landingToolsSecondaryImage2Style = { top: '13em', right: '45%', zIndex: 0 }
const landingToolsSecondaryImage3Style = { top: '39em', right: '5%', zIndex: 0 }
const landingToolsSecondaryContentStyle = { zIndex: 1 }

const toolItems = [
  {id: 0, img: '/assets/img/landing/tool.png', title: 'Movable panes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {id: 1, img: '/assets/img/landing/tool.png', title: 'Import FDX and PDF scripts', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {id: 2, img: '/assets/img/landing/tool.png', title: 'Strips auto-resize', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {id: 3, img: '/assets/img/landing/tool.png', title: 'Drag & drop interface', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
]

function Box({ img, title, text}: { img: string; title: string; text: string }): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: .5, freezeOnceVisible: true })
  const { t } = useTranslation()

  const isVisible = !!entry?.isIntersecting
  
  return (
    <div className='d-flex flex-column gap-3 overflow-hidden' style={boxStyle} ref={ref}>
      <div style={boxImageStyle}>
        <GradientAccent className={`rounded fadein-up ${ isVisible ? 'is-visible' : '' }`}>
          <Image src={img} fluid alt='icon' />
        </GradientAccent>
      </div>
      <h5 className='mb-0'>{t(title)}</h5>
      <p className='mb-0 small'>{t(text)}</p>
    </div>
  )
}

export function LandingToolsSecondary(): JSX.Element {
  const { t } = useTranslation()
  return (
    <SectionSkewed color='#66C5FF' isRising>
      <Container className='position relative' style={landingToolsSecondaryContainerStyle}>
        <div className='position-relative d-none d-md-block'>
          <Image src='assets/img/landing/blob4.png' width='300' className='position-absolute drift3' style={landingToolsSecondaryImage1Style} />
          <Image src='assets/img/landing/blob1.png' width='250' className='position-absolute drift1' style={landingToolsSecondaryImage2Style} />
          <Image src='assets/img/landing/blob2.png' width='175' className='position-absolute drift2' style={landingToolsSecondaryImage3Style} />
        </div>
        <div className='position-relative' style={landingToolsSecondaryContentStyle}>
          <div className='text-center-until-md'>
            <h2 className='fw-bold lh-base'>{t('Lots of useful tools')}</h2>
            <p className='lh-base'>
              <Trans i18nKey='landingToolsSecondary-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit.
              </Trans>
            </p>
          </div>
          <div className='d-flex flex-wrap gap-4 justify-content-center'>
            {toolItems.map(item=>(
              <Box key={item.id} img={item.img} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
        
      </Container>
    </SectionSkewed>
  )
}
