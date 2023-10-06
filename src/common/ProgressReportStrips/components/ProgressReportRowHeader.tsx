import { useTranslation } from 'react-i18next'

import { StripSimple } from 'common'

export function ProgressReportRowHeader(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='bg-dark text-light overflow-hidden'>
      <StripSimple 
        checkbox='Done'
        className='py-2'
        gridName='strip-simple-progress'
        hasDuration={false}
        pages={t('Pgs')}
        sc='#'
        slugline={t('Description')}
        status={t('Status')}
      />
    </div>
  )
}