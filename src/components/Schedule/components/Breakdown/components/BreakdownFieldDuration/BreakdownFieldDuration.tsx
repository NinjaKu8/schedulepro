import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

export function BreakdownFieldDuration(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Form.Group id='breakdown-field-duration' controlId='duration'>
      <Form.Label className='mb-0 text-muted'>{t('Duration')}</Form.Label>
      <Form.Control className='text-center' size='sm' />
    </Form.Group>
  )
}
