import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { OffcanvasTC, ManageDesigns, PopoverInfo } from 'common'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import {
  setSch_managedesignsstrips_isWide,
  updateOffcanvasComponent,
} from 'store/slices/local'

function Title({ isWide }: { isWide: boolean }): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className="d-flex gap-2">
      {isWide ? t('Design Strip > Name of Strip') : t('Design Manager')}
      <PopoverInfo>
        {t(
          'Designs represent the look of a particular strip. They are formed by a combination of strip layouts for each strip, day and banner. Some designs are public and cannot be edited. You may copy those to make your own designs.'
        )}
      </PopoverInfo>
    </div>
  )
}

export function OffcanvasManageDesigns(): JSX.Element {
  const dispatch = useAppDispatch()
  const offcanvasComponent = useAppSelector(
    (state) => state.local.offcanvasComponent
  )
  const isWide = useAppSelector(
    (state) => state.local.sch_managedesignsstrips_isWide
  )

  const toggle = useCallback((): void => {
    if (!isWide) dispatch(updateOffcanvasComponent('manageDesigns'))
    dispatch(setSch_managedesignsstrips_isWide(false))
  }, [dispatch, isWide])

  return (
    <OffcanvasTC
      className={isWide ? 'offcanvas-full' : 'offcanvas-large'}
      hasOverflow={false}
      hasPadding={false}
      show={offcanvasComponent === 'manageDesigns'}
      toggle={toggle}
      title={<Title isWide={isWide} />}
    >
      <ManageDesigns />
    </OffcanvasTC>
  )
}
