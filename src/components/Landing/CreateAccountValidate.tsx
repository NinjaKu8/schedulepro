import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Trans, useTranslation } from 'react-i18next'

const containerStyle = { maxWidth: '50em'}

function Success(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleStart = useCallback((): void => {
    navigate('/user')
  },[navigate])
  
  return (
    <>
      <h1 className='display-4 mt-5 text-center'>{t('Welcome to Think Crew!')} 🎉</h1>
      <p className='lead mb-4 text-center'>
        <Trans i18nKey='createaccountvalidate-success-title'>
          Congratulations on joining the fastest growing scheduling community
        </Trans>
      </p>

      <Container className='slide-down' style={containerStyle}>
        <p>
          <Trans i18nKey='createaccountvalidate-success-instructions1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>

        <div className='d-flex justify-content-center mt-4'>
          <Button size='lg' variant='success' onClick={handleStart}>{t('Get Started Now')}</Button>
        </div>
      </Container>
    </>
  )
}

function Invalid(): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <h1 className='display-5 mt-5 text-center'>{t('We had a problem')}</h1>
      <p className='lead mb-4 text-center'>
        <Trans i18nKey='createaccountvalidate-fail-title'>
          Unable to verify your activation code
        </Trans>
      </p>

      <Container className='slide-down' style={containerStyle}>
        <p>
          <Trans i18nKey='createaccountvalidate-fail-instructions1'>
            We were unable to identify the validation code on our servers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>
        <p>
          <Trans i18nKey='createaccountvalidate-fail-instructions2'>
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

export default function CreateAccountValidate(): JSX.Element {
  const { id } = useParams()
  console.log("🚀 ~ file: CreateAccountValidate.tsx ~ line 48 ~ CreateAccountValidate ~ id", id)
  return (
    true
      ? <Success />
      : <Invalid />      
  )
}
