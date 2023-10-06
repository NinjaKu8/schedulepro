import Container from 'react-bootstrap/Container'
import { Trans } from 'react-i18next'

const containerStyle = { maxWidth: '40em' }

export default function NotFound(): JSX.Element {
  return (
    <Container style={containerStyle} className='d-flex flex-column justify-content-center align-items-center vw-100 vh-100'>
      <h1 className='display-1'>404</h1>
      <p className='mb-4'>
        <Trans i18nKey='notfound-instructions1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
        </Trans>
      </p>
    </Container>
  )
}
