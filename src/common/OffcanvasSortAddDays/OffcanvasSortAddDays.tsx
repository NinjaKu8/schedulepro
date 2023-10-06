import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, PopoverInfo } from 'common'
import { SortAddDays } from './components'

type ManageFooterProps = {
  handleClickSubmit: () => void;
  toggle: () => void;
}

function Title(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex gap-2'>
      {t('Sort & Add Days')}
      <PopoverInfo>
        {t('Use this panel to automatically sort your strips and add or remove day breaks. You can determine when day breaks occur by selecting various criteria below.')}
      </PopoverInfo>
    </div>
  )
}

function ManageFooter({ handleClickSubmit, toggle }: ManageFooterProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <Button onClick={handleClickSubmit} variant='success' className='me-2'>{t('Sort & Add Days')}</Button>
      <Button onClick={toggle} variant='secondary'>{t('Cancel')}</Button>
    </>
  )
}

export function OffcanvasSortAddDays(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('sortAddDays')

  const handleClickSubmit = useCallback((): void => {
    console.log('click save')
    toggle()
  },[toggle])

  return (
    <OffcanvasTC 
      show={offcanvasComponent==='sortAddDays'}
      toggle={toggle} 
      title={<Title />} 
      showClose={false} 
      footer={<ManageFooter handleClickSubmit={handleClickSubmit} toggle={toggle}/>} 
    >
      <SortAddDays />
    </OffcanvasTC>
  )
}
