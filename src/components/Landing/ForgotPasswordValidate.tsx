import { useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Trans, useTranslation } from 'react-i18next'

import { AutoInput } from 'common'
import { useToggle } from 'hooks'

const containerStyle = { maxWidth: '50em'}

function Success(): JSX.Element {
  const [ password, setPassword ] = useState<string>('')
  const [ confirmPassword, setConfirmPassword ] = useState<string>('')
  const [ validated, toggleValidated ] = useToggle(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget
    if(form.checkValidity()===true) {
      event.preventDefault()
      const passwordValidated: boolean = password.length>=8 && password===confirmPassword
      if(passwordValidated) {
        console.log({ password })
        navigate('/user')
      }
    } else {
      event.preventDefault()
      event.stopPropagation()
    }
    toggleValidated()
  },[password, confirmPassword, navigate, toggleValidated])

  const submitDisabled = !(password.length>=8 && confirmPassword.length>=8)

  return (
    <>
      <h1 className='display-4 mt-5 text-center'>{t('Password Reset')}</h1>
      <p className='lead mb-4 text-center'>
        <Trans i18nKey='forgotpasswordvalidate-title'>
          Reset your password and to quickly get back into Think Crew
        </Trans>
      </p>

      <Container className='slide-down' style={containerStyle}>
        <p>
          <Trans i18nKey='forgotpasswordvalidate-instructions1'>             
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <Form.Group as={Row} className="mb-3" controlId="password">
            <Form.Label column md={3}>{t('Password')}</Form.Label>
            <Col md={9}>
              <AutoInput 
                required
                type='password' 
                minLength='8'
                callback={setPassword} 
                value={password} 
                placeholder={t('Password')} 
              />
              <Form.Text>{t('Password must be at least 8 characters')}</Form.Text>
              <Form.Control.Feedback type="invalid">{t('Please provide a valid password')}</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="password2">
            <Form.Label column md={3}>{t('Confirm password')}</Form.Label>
            <Col md={9}>
              <AutoInput 
                required
                type='password' 
                minLength='8'
                callback={setConfirmPassword} 
                value={confirmPassword} 
                placeholder={t('Password again')} 
              />
              <Form.Text>{t('Re-enter your password')}</Form.Text>
              <Form.Control.Feedback type="invalid">{t('Please enter your password as it was entered above')}</Form.Control.Feedback>
            </Col>
          </Form.Group>
          
          <div className='d-flex justify-content-center justify-content-md-end mt-4 mt-md-3'>
            <Button 
              type='submit' 
              variant='success'
              disabled={submitDisabled}
            >
              {t('Update Password')}
            </Button>
          </div>

        </Form>
      </Container>
    </>
  )
}

function Invalid(): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <h1 className='display-5 mt-5 text-center'>{t('We had a problem')}</h1>
      <p className='lead mb-4 text-center'>{t('Unable to verify your password code')}</p>

      <Container className='slide-down' style={containerStyle}>
        <p>
          <Trans i18nKey='forgotpasswordvalidate-invalid-instructions1'>
            We were unable to identify the password code on our servers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>
        <p>
          <Trans i18nKey='forgotpasswordvalidate-invalid-instructions2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>

        <div className='d-flex justify-content-center mt-4'>
          <Button variant='success'>{t('Contact Support')}</Button>
        </div>
      </Container>
    </>
  )
}

export default function ForgotPasswordValidate(): JSX.Element {
  const { id } = useParams()
  console.log("🚀 ~ file: ForgotPasswordValidate.tsx ~ line 48 ~ ForgotPasswordValidate ~ id", id)
  return (
    true
      ? <Success />
      : <Invalid />      
  )
}
