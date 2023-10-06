import { useTranslation } from 'react-i18next'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { ProfileUpdatePassword } from './components'
import { useToggle } from 'hooks'

const updateClosedStyle = { height: '0', transition: 'height 0.3s ease-in-out' }
const updateOpenStyle = { height: '20em', transition: 'height 0.3s ease-in-out' }

export function ProfilePassword() {
  const [ showUpdatePassword, toggleUpdatePassword ] = useToggle(false)
  const { t } = useTranslation()
  return (
    <>
      <Card className='mb-4 shadow'>
        <Card.Body>
          <h5>{t('Password')}</h5>
          <Container>
            <Form.Group className="d-flex mb-auto" controlId="exampleForm.ControlInput1">
              <Form.Label className='my-auto me-auto'>{t('Update your password')}</Form.Label>
              <Button variant={showUpdatePassword ? 'danger' : 'info'} size='sm' onClick={toggleUpdatePassword}>
                {showUpdatePassword
                  ? t('Cancel')
                  : t('Change Your Password')
                }
              </Button>
            </Form.Group>
          </Container>
          <div className='overflow-hidden px-4' style={showUpdatePassword ? updateOpenStyle : updateClosedStyle}>
            {showUpdatePassword && <ProfileUpdatePassword show={showUpdatePassword} toggle={toggleUpdatePassword} />}
          </div>
        </Card.Body>
      </Card>
    </>
  )
 }
