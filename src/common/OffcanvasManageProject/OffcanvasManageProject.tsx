import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManageProject } from 'common'

export function OffcanvasManageProject(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('manageProject')
  const { t } = useTranslation()
  return (
    <OffcanvasTC
      show={offcanvasComponent==='manageProject'}
      toggle={toggle}
      title={`${t('Manage')} - It's a Wonderful Life`} 
    >
      <ManageProject />
    </OffcanvasTC>
  )
}
