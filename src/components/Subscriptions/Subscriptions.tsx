import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import { Navigation, PageHeader, PageWrapper, PricingCards } from 'common'
import { SubscriptionList } from './components'

export default function Subscriptions(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex flex-column h-100'>
      <Navigation />
      <PageWrapper>
        <PageHeader>{t('Subscriptions')}</PageHeader>
        <Container className='d-flex'>
          {true 
            ? <SubscriptionList />
            : <PricingCards />
          }
        </Container>
      </PageWrapper>
    </div>
  )
}
