import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, Export } from 'common'
import { useCallback } from 'react'

type FooterProps = {
  handleClickSave: () => void;
  toggle: () => void;
}

function Footer({ handleClickSave, toggle }: FooterProps) {
  const { t } = useTranslation()
  return (
    <>
      <Button onClick={handleClickSave} variant='success' className='me-2'>{t('Export')}</Button>
      <Button onClick={toggle} variant='secondary'>{t('Cancel')}</Button>
    </>
  )
}

export function OffcanvasExport(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('export')
  const { t } = useTranslation()

  const handleClickSave = useCallback((): void => {
    console.log('click save')
    toggle()
  },[toggle])

  return (
    <OffcanvasTC
      className='offcanvas-small'
      show={offcanvasComponent==='export'}
      toggle={toggle}
      title={t('Export')} 
      showClose={false} 
      footer={<Footer handleClickSave={handleClickSave} toggle={toggle}/>} 
    >
      <Export />
    </OffcanvasTC>
  )
}
