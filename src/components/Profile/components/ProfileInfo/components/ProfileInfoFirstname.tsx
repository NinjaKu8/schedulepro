import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Form from 'react-bootstrap/Form'

import { AutoInput, FormLabelWithBreakpoint} from 'common'

export function ProfileInfoFirstname(): JSX.Element {
  const { t } = useTranslation()

  const handleNameChange = useCallback((): void => {
    console.log('name change')
  },[])

  return (
    <Form.Group>
      <FormLabelWithBreakpoint textWide={t('First name')} textNarrow={t('First')} />
      <AutoInput size='sm' callback={handleNameChange} value='Michael' type='text' autoComplete='given-name' />
    </Form.Group>
  )
}
