import { useTranslation } from 'react-i18next'

import { Navigation, PageWrapper, PageHeader } from 'common'
import { ProgressReportsList, ProgressReportsMenuBar, ProgressReportsDate } from './components'

export default function ProgressReports(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex flex-column h-100'>
      <Navigation>
        <ProgressReportsMenuBar />
      </Navigation>

      <PageWrapper>
        <div className='d-flex flex-column flex-md-row justify-content-between gap-3'>
          <PageHeader>{t('Progress Reports')}</PageHeader>
          <ProgressReportsDate />
        </div>
        <ProgressReportsList />
      </PageWrapper>
        
    </div>
  )
}