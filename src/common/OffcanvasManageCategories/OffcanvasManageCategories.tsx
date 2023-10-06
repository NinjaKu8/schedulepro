import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { OffcanvasTC, ManageCategories, PopoverInfo } from 'common'

function Title(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex gap-2'>
      {t('Category Manager')}
      <PopoverInfo>
        {t('Categories are used to group elements together. For example, you might have a category for cast, props, wardrobe, vehicles, etc. Each category can have one or more elements.')}
      </PopoverInfo>
    </div>
  )
}

export function OffcanvasManageCategories() {
  const offcanvasComponent = useAppSelector(state=>state.local.offcanvasComponent)
  const toggle = useDispatchUpdateOffcanvasComponent('manageCategories')

  return (
    <OffcanvasTC
      className='offcanvas-large'
      hasOverflow={false}
      hasPadding={false}
      show={offcanvasComponent==='manageCategories'}
      toggle={toggle}
      title={<Title />}
    >
      <ManageCategories />
    </OffcanvasTC>
  )
}
