import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManagePanes, PopoverInfo } from 'common'

function Title(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex gap-2'>
      {t('Pane Manager')}
      <PopoverInfo>
        {t('Panes are the resizable containers that hold different types of data on your screen. You can save your custom panes and use them later.')}
      </PopoverInfo>
    </div>
  )
}

export function OffcanvasManagePanes() {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('managePanes')

  return (
    <OffcanvasTC
      className='offcanvas-large'
      hasOverflow={false}
      hasPadding={false}
      show={offcanvasComponent==='managePanes'}
      toggle={toggle}
      title={<Title />}
    >
      <ManagePanes />
    </OffcanvasTC>
  )
}
