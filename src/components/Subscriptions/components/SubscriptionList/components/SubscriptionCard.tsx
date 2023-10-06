import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'

import { ProgressCircle } from 'common'
import { SubscriptionDropdown } from './components'

const cardStyles = { width: '20em' }

export function SubscriptionCard(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Card className='shadow' style={cardStyles}>
      <Card.Body>
        <Card.Title className='d-flex'>
          <div className='me-auto'>{t('Schedule')}</div>
          <SubscriptionDropdown />
        </Card.Title>
        <div className='d-flex flex-column align-items-center'>
          <h4>239.88 / {t('year')}</h4>
          <ProgressCircle percentage={66} />
          <p className='text-muted text-center'>319 {t('days remaining')}</p>
          <p className='text-muted text-center'>{t('This subscription will auto renew on')} July 22, 2023</p>
        </div>
      </Card.Body>
    </Card>
  )
}
