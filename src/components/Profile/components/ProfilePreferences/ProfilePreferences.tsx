import { useTranslation } from 'react-i18next'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import { ProfilePrefDateOrder, ProfilePrefLanguage, ProfilePrefMeasurementUnits, ProfilePrefShowEmail, ProfilePrefShowLinks, ProfilePrefShowPhone, ProfilePrefShowProjects, ProfilePrefShowWelcome, ProfilePrefUnsubscribe } from './components'

export function ProfilePreferences() {
  const { t } = useTranslation()
  return (
    <Card className='mb-4 shadow'>
      <Card.Body>
        <h5 className='mb-3'>{t('Your Preferences')}</h5>
        <Container className='d-flex flex-column gap-2'>
          <h6 className='border-bottom'>{t('General')}</h6>
          <ProfilePrefLanguage />
          <ProfilePrefDateOrder />
          <ProfilePrefMeasurementUnits />
          <ProfilePrefShowWelcome /> 

          <h6 className='border-bottom'>{t('Your Public Page')}</h6>
          <ProfilePrefShowProjects />
          <ProfilePrefShowEmail />
          <ProfilePrefShowPhone />
          <ProfilePrefShowLinks />

          <h6 className='border-bottom'>{t('Communication')}</h6>
          <ProfilePrefUnsubscribe />
        </Container>
      </Card.Body>
    </Card>
  )
}
