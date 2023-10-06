import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common'

export function ManageScriptName(): JSX.Element {
  const { t } = useTranslation()

  const handleChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  return (
    <Form.Group>
      <Form.Label className='text-muted small'>{t('Name')}</Form.Label>
      <AutoInput size='lg' callback={handleChange} value='Script 1' />
    </Form.Group>
  )
}
