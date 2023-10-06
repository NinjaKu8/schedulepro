import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, PopoverInfo } from 'common'
import { RenumberBreakdowns } from './components'

type ManageFooterProps = {
  handleClickSubmit: () => void;
  toggle: () => void;
}

function Title(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex gap-2'>
      {t('Renumber Breakdowns')}
    </div>
  )
}

function ManageFooter({ handleClickSubmit, toggle }: ManageFooterProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex gap-1'>
      <Button onClick={toggle} variant='secondary'>{t('Cancel')}</Button>
      <Button onClick={handleClickSubmit} variant='warning' className='me-2'>{t('Renumber')}</Button>
    </div>
  )
}

export function OffcanvasRenumberBreakdowns(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('renumberBreakdowns')

  const handleClickSubmit = useCallback((): void => {
    console.log('click save')
    toggle()
  },[toggle])

  return (
    <OffcanvasTC 
      show={offcanvasComponent==='renumberBreakdowns'}
      toggle={toggle} 
      title={<Title />} 
      showClose={false} 
      footer={<ManageFooter handleClickSubmit={handleClickSubmit} toggle={toggle}/>} 
    >
      <RenumberBreakdowns />
    </OffcanvasTC>
  )
}
