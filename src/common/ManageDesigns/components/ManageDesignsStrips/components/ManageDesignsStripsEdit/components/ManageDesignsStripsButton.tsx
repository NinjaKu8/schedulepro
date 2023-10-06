import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'store/hooks'

import { setSch_managedesignsstrips_isWide } from 'store/slices/local'

export function ManageDesignsStripsButton(): JSX.Element {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('edit strip design')
    dispatch(setSch_managedesignsstrips_isWide(true))
  }

  return (
    <div>
      <p className="lead mb-2">{t('Edit')}</p>
      <div className="mx-4">
        <Button size="sm" onClick={handleOnClick}>
          {t('Edit this strip design')}
        </Button>
      </div>
    </div>
  )
}
