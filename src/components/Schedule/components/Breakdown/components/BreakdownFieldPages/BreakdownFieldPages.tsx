import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common'
import { BreakdownLabel } from '../index'

export function BreakdownFieldPages(): JSX.Element {
  const { t } = useTranslation()

  const handleUpdate = useCallback((value: string): void => {
    console.log('update', value)
  },[])

  return (
    <Form.Group id='breakdown-field-pages' controlId='pages'>
      <BreakdownLabel className='text-center'>{t('Pgs')}</BreakdownLabel>
      <AutoInput className='text-center' size='sm' value='' callback={handleUpdate} regex={/[0-9]/} type='text' inputMode='numeric' pattern='[0-9]' />
    </Form.Group>
  )
}
