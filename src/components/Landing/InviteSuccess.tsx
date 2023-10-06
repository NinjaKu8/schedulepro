import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const containerStyle = { maxWidth: '50em'}

export default function CreateAccountSuccess(): JSX.Element {
  const { t } = useTranslation()
  const navitage = useNavigate()

  const handleOnClick = (): void => {
    navitage('/user')
  }

  return (
    <>
    <h1 className='display-4 mt-5 text-center'>{t('Congratulations 🎉')}</h1>
    <p className='lead mb-5 text-center'>{t('You just joined the fastest growing online community in the entertainment industry.')}</p>

      <Container className='slide-down' style={containerStyle}>
        <p>
          <Trans i18nKey='createaccountsuccess-instructions1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>
        <p>
          <Trans i18nKey='createaccountsuccess-instructions2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
          </Trans>
        </p>

        <div className='d-flex justify-content-end'>
          <Button size='lg' className='p-3' variant='success' onClick={handleOnClick}>{t("Get started...")}</Button>
        </div>
        
      </Container>
    </>
  )
}
