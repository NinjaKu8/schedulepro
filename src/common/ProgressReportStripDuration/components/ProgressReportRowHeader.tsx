import { useTranslation } from 'react-i18next'

import { StripSimple } from 'common'

const rulerOffsetStyle = { paddingLeft: '1.8em' }

export function ProgressReportRowHeader(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='bg-dark text-light overflow-hidden'>
      <StripSimple 
        checkbox='Done'
        className='py-2'
        duration={t('Estim')}
        gridName='strip-simple-progress-detailed'
        pages={t('Pgs')}
        sc='#'
        slugline={t('Slugline')}
        status={t('Status')}
        style={rulerOffsetStyle}
      />
    </div>
  )
}