import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common'

export function ManageScheduleSeason(): JSX.Element {
  const { t } = useTranslation()

  const handleChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  return (
    <Form.Group>
      <Form.Label className='text-muted small'>{t('Season')}</Form.Label>
      <AutoInput className='text-center' callback={handleChange} value='S2' />
    </Form.Group>
  )
}
