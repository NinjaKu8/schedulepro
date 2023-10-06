import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Trans, useTranslation } from 'react-i18next'

import { InputEmail } from 'common'
import { useToggle } from 'hooks'
import { emailValidate } from 'helpers'

const containerStyle = { maxWidth: '40em'}

export default function ForgotPassword(): JSX.Element {
  const [ email, setEmail ] = useState<string>('')
  const [ validated, toggleValidated ] = useToggle(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    if(form.checkValidity()===true) {
      event.preventDefault()
      const emailValidated: boolean = emailValidate(email)
      if(emailValidated) {
        console.log({ email })
        navigate('success')
      }
    } else {
      event.preventDefault()
      event.stopPropagation()
    }
    toggleValidated() // this lets the form know that the above validation has occurred  
  },[email, navigate, toggleValidated])

  return (
    <>
      <h1 className='display-5 mt-5 text-center'>{t('Forgot Password')}</h1>
      <p className='lead mb-4 text-center'>
        <Trans i18nKey='forgotpassword-title'>
          Let's get you back in to the site
        </Trans>
      </p>

      <Container className='slide-down' style={containerStyle}>

        <p className='mb-4'>
          <Trans i18nKey='forgotpassword-instructions1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column md={3} htmlFor='email'>{t('Email address')}</Form.Label>
            <Col md={9}>
              <InputEmail 
                callback={setEmail} 
                id='email' 
                required
                value={email}
              />
              <Form.Control.Feedback type="invalid">{t('Please provide a valid email address')}</Form.Control.Feedback>
            </Col>
          </Form.Group>
          
          <div className='d-flex justify-content-center mt-4 mt-md-3'>
            <Button 
              type='submit' 
              variant='success'
              disabled={!email.length}
            >
              {t('Send me an email link')}
            </Button>
          </div>

        </Form>

      </Container>
    </>
  )
}
