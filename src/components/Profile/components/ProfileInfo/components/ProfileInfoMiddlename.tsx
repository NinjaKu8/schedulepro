import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Form from 'react-bootstrap/Form'

import { AutoInput, FormLabelWithBreakpoint} from 'common'

export function ProfileInfoMiddlename(): JSX.Element {
  const { t } = useTranslation()

  const handleNameChange = useCallback((): void => {
    console.log('name change')
  },[])

  return (
    <Form.Group>
      <FormLabelWithBreakpoint textWide={t('Middle name')} textNarrow={t('Middle')} />
      <AutoInput size='sm' callback={handleNameChange} value='R.' type='text' autoComplete='additional-name' />
    </Form.Group>
  )
}
