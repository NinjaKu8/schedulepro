import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManageUsers } from 'common'

export function OffcanvasManageUsers(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('manageUsers')
  const { t } = useTranslation()

  return (
    <OffcanvasTC
      show={offcanvasComponent==='manageUsers'}
      toggle={toggle}
      title={`${t('Manage')} - Users`}
    >
      <ManageUsers />
    </OffcanvasTC>
  )
}
