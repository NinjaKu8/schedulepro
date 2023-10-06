import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManageScenarios, PopoverInfo } from 'common'

function Title(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex gap-2'>
      {t('Scenario Manager')}
      <PopoverInfo>
        {t('Scenarios are used to create different scheduling plans and contain one or more strip boards')}
      </PopoverInfo>
    </div>
  )
}

export function OffcanvasManageScenarios() {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('manageScenarios')
  return (
    <OffcanvasTC
      className='offcanvas-large'
      hasOverflow={false}
      hasPadding={false}
      show={offcanvasComponent==='manageScenarios'}
      toggle={toggle}
      title={<Title />}
    >
      <ManageScenarios />
    </OffcanvasTC>
  )
}
