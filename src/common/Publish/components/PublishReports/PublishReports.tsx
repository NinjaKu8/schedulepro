import { useTranslation } from 'react-i18next'

import { ManagerDualPane } from 'common'
import { PublishOptions, PublishPreview, PublishSettings } from '../common'
import { PublishReportsSelectors } from './components'

function PublishReportsSettings() {
  const { t } = useTranslation()
  return (
    <PublishSettings>
      <div>
        <PublishReportsSelectors />
      </div>

      <div>
        <hr />
        <h6>{t('Publish Options')}</h6>
        <PublishOptions />
      </div>
    </PublishSettings>
  )
}

export function PublishReports(): JSX.Element {
  return (
    <ManagerDualPane
      left={<PublishPreview />}
      right={<PublishReportsSettings />}
    />
  )
}
