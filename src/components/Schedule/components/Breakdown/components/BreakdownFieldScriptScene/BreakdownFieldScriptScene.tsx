import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

export function BreakdownFieldScriptScene(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Form.Group id='breakdown-field-script-scene' controlId='scriptscene'>
      <Form.Label className='mb-0 text-muted'>{t('Script Scene')}</Form.Label>
      <Form.Control size='sm' />
    </Form.Group>
  )
}
