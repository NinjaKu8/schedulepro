import { useTranslation } from 'react-i18next'

import { ManagerDualPane } from 'common'
import { PublishOptions, PublishPreview, PublishSettings } from '../common'
import { PublishBoardOptions, PublishBoardSelectors } from './components'

function PublishBoardsSettings(): JSX.Element {
  const { t } = useTranslation()
  return (
    <PublishSettings>
      <div>
        <PublishBoardSelectors />
      </div>

      <div>
        <hr />
        <h6>{t('Board Options')}</h6>
        <PublishBoardOptions />
      </div>

      <div>
        <hr />
        <h6>{t('Publish Options')}</h6>
        <PublishOptions />
      </div>
    </PublishSettings>
  )
}

export function PublishBoards(): JSX.Element {
  return (
    <ManagerDualPane 
      left={<PublishPreview />} 
      right={<PublishBoardsSettings />} 
    />
  )
}
