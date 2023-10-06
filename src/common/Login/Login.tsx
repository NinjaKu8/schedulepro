import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import { InputEmail, InputPassword } from 'common'
import { emailValidate, passwordValidate } from 'helpers'
import { useToggle } from 'hooks'

type Props = {
  toggle: () => void;
}

export function Login({ toggle }: Props): JSX.Element {
  const [ email, setEmail ] = useState('') // not actually used in login proceedure, only there for AutoInput
  const [ password, setPassword ] = useState('') // not actually used in login proceedure, only there for AutoInput
  const [ validated, toggleValidated ] = useToggle(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const form = event.currentTarget
    if(form.checkValidity()===true) {// now properly validate the form
      const emailValidated: boolean = emailValidate(form.email.value)
      const passwordValidated: boolean = passwordValidate(form.password.value)
      if(emailValidated && passwordValidated) {
        // TODO: validate email and password, then login
        console.log('email', form.email.value, 'password', form.password.value)
        toggle()
        navigate('/user')
      } 
    } else {
      event.stopPropagation()
    }
    toggleValidated() // this lets the form know that the above validation has occurred    
  },[navigate, toggleValidated, toggle])

  const handleForgot = useCallback((): void => {    
    console.log('forgot')
    toggle()
    navigate('/forgotpassword')
  },[toggle, navigate])

  return (
    <Container className='p-4'>
      <p className='lead mb-4'>{t('Log In')}</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column gap-3'>

        <Form.Group as={Row}>
          <Form.Label column xs={3} htmlFor='email'>{t('Email')}</Form.Label>
          <Col xs={9}>
            <InputEmail 
              callback={setEmail} 
              id='email'
              required
              value={email} 
            />
            <Form.Control.Feedback type="invalid">{t('Please provide a valid email address')}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column xs={3} htmlFor='password'>{t('Password')}</Form.Label>
          <Col xs={9}>
            <InputPassword 
              callback={setPassword} 
              id='password'
              required
              value={password} 
            />
            <Form.Control.Feedback type="invalid">{t('Please provide a valid password')}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <div className='d-flex mt-4 gap-2'>
          <Button onClick={handleForgot} variant='light' size='sm' className='me-auto'>{t('Forgot Password')}</Button>
          <Button onClick={toggle} variant='secondary'>{t('Cancel')}</Button>
          <Button type='submit' variant='success'>{t('Log In')}</Button>
        </div>
      </Form>
    </Container>
  )
}
