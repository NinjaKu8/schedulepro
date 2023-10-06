import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, FindReplace } from 'common'

export function OffcanvasFindReplace(): JSX.Element {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('findReplace')
  const { t } = useTranslation()
  return (
    <OffcanvasTC
      className='offcanvas-small'
      show={offcanvasComponent==='findReplace'}
      toggle={toggle}
      title={t('Find & Replace')} 
    >
      <FindReplace />
    </OffcanvasTC>
  )
}
