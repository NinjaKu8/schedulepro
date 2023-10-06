import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManageCalendars, PopoverInfo } from 'common'

function Title(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex gap-2'>
      {t('Calendar Manager')}
      <PopoverInfo>
        {t('Calendars are used to set globally used dates for a particular scenario, like a start date, holidays, weekends, etc.')}
      </PopoverInfo>
    </div>
  )
}

export function OffcanvasManageCalendars() {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('manageCalendars')

  return (
    <OffcanvasTC
      className='offcanvas-large'
      hasOverflow={false}
      hasPadding={false}
      show={offcanvasComponent==='manageCalendars'}
      toggle={toggle}
      title={<Title />}
    >
      <ManageCalendars />
    </OffcanvasTC>
  )
}
