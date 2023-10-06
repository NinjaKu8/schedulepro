import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManageScript } from 'common'

export function OffcanvasManageScript(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('manageScript')
  const { t } = useTranslation()

  return (
    <OffcanvasTC
      show={offcanvasComponent==='manageScript'}
      toggle={toggle}
      title={`${t('Manage')} - Script 1`}
    >
      <ManageScript />
    </OffcanvasTC>
  )
}
