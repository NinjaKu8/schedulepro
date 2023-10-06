import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'
import RcPrint from 'rc-print'

import { useAppSelector } from 'store/hooks'
import { OffcanvasTC, Publish } from 'common'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'

import { RCPrint } from './components/rc/RCPrint'

import './components/rc/index.css'

type FooterProps = {
  handleClickSave: () => void
  toggle: () => void
}

function Footer({ handleClickSave, toggle }: FooterProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <Button onClick={handleClickSave} variant="success" className="me-2">
        {t('Publish')}
      </Button>
      <Button onClick={toggle} variant="secondary">
        {t('Cancel')}
      </Button>
    </>
  )
}

export function OffcanvasPublish(): JSX.Element {
  const offcanvasComponent = useAppSelector(
    (state) => state.local.offcanvasComponent
  )
  const toggle = useDispatchUpdateOffcanvasComponent('publish')
  const { t } = useTranslation()

  const rcRef = useRef<RcPrint | null>(null)

  const handleRCPrint = () => {
    rcRef.current.onPrint()
  }

  return (
    <OffcanvasTC
      className="offcanvas-large"
      hasOverflow={false}
      hasPadding={false}
      show={offcanvasComponent === 'publish'}
      toggle={toggle}
      title={t('Publish')}
      showClose={false}
      footer={<Footer handleClickSave={handleRCPrint} toggle={toggle} />}
    >
      <RCPrint ref={rcRef} />
      <Publish />
    </OffcanvasTC>
  )
}
