import { useTranslation } from 'react-i18next'

import { ManagerDualPane } from 'common'
import { PublishOptions, PublishPreview, PublishSettings } from '../common'
import { PublishDoodSelectors, PublishDoodOptions } from './components'

function PublishDoodSettings() {
  const { t } = useTranslation()
  return (
    <PublishSettings>
      <div>
        <PublishDoodSelectors />
      </div>

      <div>
        <hr />
        <h6>{t('Day Out of Days Options')}</h6>
        <PublishDoodOptions />
      </div>

      <div>
        <hr />
        <h6>{t('Publish Options')}</h6>
        <PublishOptions />
      </div>
    </PublishSettings>
  )
}

export function PublishDood(): JSX.Element {
  return (
    <ManagerDualPane 
      left={<PublishPreview />} 
      right={<PublishDoodSettings />} 
    />
  )
}
