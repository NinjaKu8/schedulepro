import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManageScheduleSettings } from 'common'

export function OffcanvasManageScheduleSettings(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('manageScheduleSettings')
  const { t } = useTranslation()
  return (
    <OffcanvasTC
      show={offcanvasComponent==='manageScheduleSettings'}
      toggle={toggle}
      title={`${t('Schedule Settings')} - First Draft`} 
    >
      <ManageScheduleSettings />
    </OffcanvasTC>
  )
}
