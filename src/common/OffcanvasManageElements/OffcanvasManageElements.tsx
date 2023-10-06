import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManageElements, PopoverInfo } from 'common'

function Title(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex gap-2'>
      {t('Element Manager')}
      <PopoverInfo>
        {t('Elements are people or items that you\'ll need on set like cast, props, wardrobe, vehicles, etc. Each element belongs to one category.')}
      </PopoverInfo>
    </div>
  )
}

export function OffcanvasManageElements(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('manageElements')
  return (
    <OffcanvasTC
      className='offcanvas-large'
      hasOverflow={false}
      hasPadding={false}
      show={offcanvasComponent==='manageElements'}
      toggle={toggle}
      title={<Title />}
    >
      <ManageElements />
    </OffcanvasTC>
  )
}
