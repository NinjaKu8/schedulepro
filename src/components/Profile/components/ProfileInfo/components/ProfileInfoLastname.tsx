import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Form from 'react-bootstrap/Form'

import { AutoInput, FormLabelWithBreakpoint} from 'common'

export function ProfileInfoLastname(): JSX.Element {
  const { t } = useTranslation()

  const handleNameChange = useCallback((): void => {
    console.log('name change')
  },[])

  return (
    <Form.Group>
      <FormLabelWithBreakpoint textWide={t('Last name')} textNarrow={t('Last')} />
      <AutoInput size='sm' callback={handleNameChange} value='Williams' type='text' autoComplete='family-name' />
    </Form.Group>
  )
}
