import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common'

export function ManageScheduleRevisionColor(): JSX.Element {
  const { t } = useTranslation()

  const handleChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  return (
    <Form.Group>
      <Form.Label className='text-muted small'>{t('Revision Color')}</Form.Label>
      <AutoInput className='text-center' callback={handleChange} value='Blue' />
    </Form.Group>
  )
}
