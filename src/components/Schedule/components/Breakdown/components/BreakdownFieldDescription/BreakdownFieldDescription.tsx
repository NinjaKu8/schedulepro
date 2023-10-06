import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common'
import { BreakdownLabel } from '../index'

export function BreakdownFieldDescription(): JSX.Element {
  const { t } = useTranslation()

  const handleUpdate = useCallback((value: string): void => {
    console.log('update', value)
  },[])

  return (
    <Form.Group id='breakdown-field-description' controlId='description'>
      <BreakdownLabel>{t('Description')}</BreakdownLabel>
      <AutoInput size='sm' value='' callback={handleUpdate} />
    </Form.Group>
  )
}
