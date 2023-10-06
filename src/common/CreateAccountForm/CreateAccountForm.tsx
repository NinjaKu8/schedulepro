import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { AutoInput, Checkbox, InputEmail, InputPassword } from 'common'
import { IJoinObject } from 'types/types'
import { emailValidate, passwordValidate } from 'helpers'
import { useToggle } from 'hooks'

type Props = {
  handleSuccess: (obj: IJoinObject) => void
}

const containerStyle = { maxWidth: '50em'}

export function CreateAccountForm({ handleSuccess }: Props): JSX.Element {
  const [ firstname, setFirstname ] = useState<string>('')
  const [ middlename, setMiddlename ] = useState<string>('')
  const [ lastname, setLastname ] = useState<string>('')
  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [ confirmPassword, setConfirmPassword ] = useState<string>('')
  const [ isChecked, toggleIsChecked ] = useToggle(false)
  const [ validated, toggleValidated ] = useToggle(false)
  const { t } = useTranslation()

  const handleClickCheckbox = useCallback((): void => {
    toggleIsChecked()    
  },[toggleIsChecked])

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget
    if(form.checkValidity()===true) { // now properly validate the form
      const emailValidated: boolean = emailValidate(email)
      const passwordValidated: boolean = passwordValidate(password) && password===confirmPassword
      if(firstname.length && lastname.length && emailValidated && passwordValidated && isChecked) {
        event.preventDefault()
        handleSuccess({ firstname, middlename, lastname, email, password })
        return
      } 
    } else {
      event.preventDefault()
      event.stopPropagation()
    }
    toggleValidated() // this lets the form know that the above validation has occurred    
  },[firstname, middlename, lastname, email, password, confirmPassword, isChecked, handleSuccess, toggleValidated])

  const submitDisabled = !(firstname.length && lastname.length && email.length && password.length>=8 && confirmPassword.length>=8 && isChecked)

  return (
    <Container className='slide-down' style={containerStyle}>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Row>
          <Col md={3}>
            <Form.Label column md={3}>{t('Name')}</Form.Label>
          </Col>
          <Col md={9} className='d-md-flex gap-3 mb-3'>
            <Form.Group className="mb-3 mb-md-0" controlId="firstname">
              <AutoInput 
                required
                callback={setFirstname} 
                value={firstname} 
                placeholder={t('First name')}
                type='text' 
                inputMode='given-name'
              />
              <Form.Control.Feedback type="invalid">{t('Please provide your first name')}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3 mb-md-0' controlId="middlename">
              <AutoInput 
                callback={setMiddlename} 
                value={middlename} 
                placeholder={t('Middle name')} 
                type='text' 
                inputMode='additional-name'
              />
            </Form.Group>
            <Form.Group className='mb-3 mb-md-0' controlId="lastname">
              <AutoInput 
                required
                callback={setLastname} 
                value={lastname} 
                placeholder={t('Last name')} 
                type='text' 
                inputMode='family-name'
              />
              <Form.Control.Feedback type="invalid">{t('Please provide your last name')}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

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

        <Form.Group as={Row} className="mb-3" controlId="password">
          <Form.Label column md={3} htmlFor='password1'>{t('Password')}</Form.Label>
          <Col md={9}>
            <InputPassword 
              autoComplete='new-password'
              callback={setPassword} 
              id='password1'
              required
              value={password} 
            />
            <Form.Text>{t('Password must be at least 8 characters')}</Form.Text>
            <Form.Control.Feedback type="invalid">{t('Please provide a valid password')}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="password2">
          <Form.Label column md={3} htmlFor='password2'>{t('Confirm password')}</Form.Label>
          <Col md={9}>
            <InputPassword 
              autoComplete='new-password'
              callback={setConfirmPassword} 
              id='password2'
              placeholder={t('Password again')}
              required
              value={confirmPassword} 
            />
            <Form.Text>{t('Please re-enter your password')}</Form.Text>
            <Form.Control.Feedback type="invalid">{t('Please enter your password as it was entered above')}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="agree">
          <Col md={3}></Col>
          <Col md={9}>
            <Checkbox
              callback={handleClickCheckbox}
              checked={isChecked}
              required
              label={<p>I have read the <Link to='/terms'>Terms of Use</Link> and agree</p>}
              feedback="You must agree to the Terms of Use before joining"
              feedbackType="invalid"
            />
          </Col>
        </Form.Group>
        
        <div className='d-flex justify-content-center justify-content-md-end mt-4 mt-md-3'>
          <Button 
            type='submit' 
            size='lg' 
            variant='success'
            disabled={submitDisabled}
            className='p-3'
          >
            {t('Join Now for Free')}
          </Button>
        </div>

      </Form>

    </Container>
  )
}