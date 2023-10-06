import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Trans, useTranslation } from 'react-i18next'

const containerStyle = { maxWidth: '50em'}

export default function ForgotPasswordSuccess(): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <h1 className='display-4 mt-5 text-center'>{t("Next Step...")}</h1>
      <p className='lead mb-5 text-center'>
        <Trans i18nKey='forgotpasswordsuccess-title'>
          Check your email for a password link
        </Trans>
      </p>

      <Container className='slide-down' style={containerStyle}>
        <p>
          <Trans i18nKey='forgotpasswordsuccess-instructions1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>
        <p>
          <Trans i18nKey='forgotpasswordsuccess-instructions2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>

        <div className='d-flex justify-content-end'>
          <Button size='sm' variant='light'>{t("I didn't receive an email")}</Button>
        </div>
        
      </Container>
    </>
  )
}
