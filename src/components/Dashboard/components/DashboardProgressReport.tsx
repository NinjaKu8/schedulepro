import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'

import { DashboardCardHeader, ProgressReportStrips } from 'common'

export function DashboardProgressReport(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <DashboardCardHeader left={t('Progress Report')} />
      <Card className='shadow'>
        <Card.Body>
          <ProgressReportStrips />     
        </Card.Body>
      </Card>
    </div>
  )
}
