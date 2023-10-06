import Form from 'react-bootstrap/Form'
import { Trans, useTranslation } from 'react-i18next'

import { AutoInput, Checkbox } from 'common'

type ElementsDoodCheckboxProps = {
  label: string;
}
function ElementsDoodCheckbox({ label }: ElementsDoodCheckboxProps): JSX.Element {
  const handleClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {}
  return (
    <div className='d-flex justify-content-between'>
      <Form.Label>{label}</Form.Label>
      <Checkbox callback={handleClickCheckbox} />
    </div>
  )
}

const minDaysInputStyle = {width: '3em'}

export function ManageElementsDood(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <p className='lead mb-2'>{t('Day Out of Days')}</p>
      <div className='px-4'>
        <ElementsDoodCheckbox label={t('Lock Element ID')} />
        <ElementsDoodCheckbox label={t('Include in Boards')} />
        <ElementsDoodCheckbox label={t('Allow Hold Days')} />
        <ElementsDoodCheckbox label={t('Allow Drop/Pickup')} />
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <Trans i18nKey='manageelement-minimumdays'>
              Minimum days between drop &amp; pickup
            </Trans>
          </div>
          <div><AutoInput value='10' callback={()=>{}} className='text-center' style={minDaysInputStyle} /></div>
        </div>
      </div>
    </div>
  )
}
