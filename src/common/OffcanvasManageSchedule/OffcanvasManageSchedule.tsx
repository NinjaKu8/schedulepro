import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManageSchedule } from 'common'

export function OffcanvasManageSchedule(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  console.log("🚀 ~ file: OffcanvasManageSchedule.tsx:9 ~ OffcanvasManageSchedule ~ offcanvasComponent:", offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('manageSchedule')
  const { t } = useTranslation()

  return (
    <OffcanvasTC
      show={offcanvasComponent==='manageSchedule'}
      toggle={toggle}
      title={`${t('Manage')} - Schedule 1`}
    >
      <ManageSchedule />
    </OffcanvasTC>
  )
}
