import { useCallback, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { InputPassword } from 'common'
import { useToggle } from 'hooks'
import { passwordValidate } from 'helpers'

type Props = {
  show: boolean;
  toggle: () => void;
}

export function ProfileUpdatePassword({ show, toggle }: Props): JSX.Element {
  const { t } = useTranslation()
  const [ currentPassword, setCurrentPassword ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [ confirmPassword, setConfirmPassword ] = useState<string>('')
  const [ validated, toggleValidated ] = useToggle(false)

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const form = event.currentTarget
    if(form.checkValidity()===true) {// now properly validate the form
      const passwordValidated: boolean = currentPassword.length>=8 && passwordValidate(password) && password===confirmPassword
      if(passwordValidated) {
        console.log({ currentPassword, password })
        toggle()
        form.reset()
      } 
    } else {
      event.stopPropagation()
    }
    toggleValidated() // this lets the form know that the above validation has occurred    
  },[currentPassword, password, confirmPassword, toggle, toggleValidated])

  return (
    <Container className='mt-3'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className='text-muted' column md={4} htmlFor='password1'>{t('Current password')}</Form.Label>
          <Col md={8}>
            <InputPassword 
              callback={setCurrentPassword} 
              id='password1'
              required
              size='sm'
              value={currentPassword} 
            />
            <Form.Control.Feedback type="invalid">{t('Please provide a valid password')}</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className='text-muted' column md={4} htmlFor='password2'>{t('Password')}</Form.Label>
          <Col md={8}>
            <InputPassword 
              autoComplete='new-password'
              callback={setPassword} 
              id='password2'
              required
              size='sm'
              value={password} 
            />
            <Form.Text>{t('Password must be at least 8 characters')}</Form.Text>
            <Form.Control.Feedback type="invalid">{t('Please provide a valid password')}</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className='text-muted' column md={4} htmlFor='password3'>{t('Re-enter new password')}</Form.Label>
          <Col md={8}>
            <InputPassword 
              autoComplete='new-password'
              callback={setConfirmPassword} 
              id='password3'
              required
              size='sm'
              value={confirmPassword} 
            />
            <Form.Text>{t('Password must be at least 8 characters')}</Form.Text>
            <Form.Control.Feedback type="invalid">{t('Please provide a valid password')}</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <div className='d-flex justify-content-center justify-content-md-end mt-4 mt-md-3'>
          <Button 
            type='submit' 
            size='sm'
            variant='success'
          >
            {t('Save new password')}
          </Button>
        </div>
      </Form>
    </Container>
  )
}
