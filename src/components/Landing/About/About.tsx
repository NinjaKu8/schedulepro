import Container from 'react-bootstrap/Container'
import { Trans, useTranslation } from 'react-i18next'
import { AboutPerson } from './components'

const containerStyle = { maxWidth: '60em' }

export default function About(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='slide-down'>
      <section>
        <Container style={containerStyle}>
          <h2 className='display-6 my-4'>{t('About')}</h2>
          <p>
            <Trans i18nKey='landingabout-header'>
              Think Crew was founded in 2013 by Michael R. Williams. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non.
            </Trans>
          </p>
        </Container>
      </section>

      <section>
        <Container style={containerStyle}>
          <h2 className='display-6 my-4'>{t('Team')}</h2>
          <div className='d-flex flex-wrap gap-4 justify-content-center'>
            <AboutPerson name='Michael R. Williams' title={t('Founder')} img='/assets/img/landing/mw.png'>
              <Trans i18nKey='landingabout-bio-mw'>
                Think Crew was founded in 2013 by Michael R. Williams. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. 
              </Trans>
            </AboutPerson>
            <AboutPerson name='Yuliia Bondarenko' title={t('Senior UI/UX Designer')} img='/assets/img/landing/yuliia.jpg'>
              <Trans i18nKey='landingabout-bio-yb'>
                Yuliia has more than 120 finished projects and 8 years of experience in different spheres. Her favorite style is minimalism. She says that her main goal is to make interfaces user-friendly and easy to understand.
              </Trans>
            </AboutPerson>
          </div>
        </Container>
      </section>
    </div>
  )
}
