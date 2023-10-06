import { useId } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import CloseButton from 'react-bootstrap/CloseButton'
import { useTranslation } from 'react-i18next'

type Props = {
  [x: string]: any;
}

export function Filter({ ...rest }: Props): JSX.Element {
  const id = useId()
  const { t } = useTranslation()
  return (
    <InputGroup {...rest}>
      <Form.Control
        placeholder={t('Filter')}
        aria-label={t('Filter')}
        aria-describedby={id}
      />
      <InputGroup.Text id={id}><CloseButton /></InputGroup.Text>
    </InputGroup>
  )
}
