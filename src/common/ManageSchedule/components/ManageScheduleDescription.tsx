import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common'

export function ManageScheduleDescription(): JSX.Element {
  const { t } = useTranslation()

  const handleChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  return (
    <Form.Group>
      <Form.Label className='text-muted small'>{t('Description')}</Form.Label>
      <AutoInput callback={handleChange} value='This is a description of this schedule' />
    </Form.Group>
  )
}
