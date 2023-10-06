import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Form from 'react-bootstrap/Form'

import { AutoInput, FormLabel } from 'common'

export function ProfileInfoPosition(): JSX.Element {
  const { t } = useTranslation()

  const handleNameChange = useCallback((): void => {
    console.log('position change')
  },[])

  return (
    <Form.Group>
      <FormLabel>{t('Position')}</FormLabel>
      <AutoInput size='sm' callback={handleNameChange} value='Line Producer' />
    </Form.Group>
  )
}
