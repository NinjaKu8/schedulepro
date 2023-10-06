import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Trans, useTranslation } from 'react-i18next'

import { AutoInput } from 'common'

export function ProjectNew(): JSX.Element {
  const { t } = useTranslation()

  const handleName = useCallback((value: string): void => {
    console.log('name', value)
  },[])

  const handleDescription = useCallback((value: string): void => {
    console.log('description', value)
  },[])

  const handleUsers = useCallback((value: string): void => {
    console.log('users', value)
  },[])

  return (
    <>
      <Container>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='small text-muted'>{t('Name')}</Form.Label>
          <AutoInput callback={handleName} value='' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='small text-muted'>{t('Description')} ({t('optional')})</Form.Label>
          <AutoInput callback={handleDescription} value='' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='small text-muted'>{t('Add Users')} ({t('optional')})</Form.Label>
          <AutoInput as='textarea' callback={handleUsers} value='' />
          <Form.Text>
            <Trans i18nKey='projectnew-instructions'>
              Enter email addresses of any users you'd like to invite to this project. Separate multiple emails with a comma.
            </Trans>
          </Form.Text>
        </Form.Group>
      </Container>
    </>
  )
}
