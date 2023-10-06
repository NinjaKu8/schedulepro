import { Trans, useTranslation } from 'react-i18next'

import { SectionFeature } from 'common'

export function InitiativesUss(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='slide-down'>
      <div className='mb-5'>
        <h2 className='display-5 mt-4 text-center fw-bold'>{t('Universal Schedule Standard')}</h2>
        <p className='lead text-center'>
          <Trans i18nKey='landinginitiatives-uss-title'>
            A unified standard for the storage and transport of breakdown and schedule data in the entertainment industry
          </Trans>
        </p>
      </div>

      <div className='d-flex flex-column gap-4'>
      
        <SectionFeature title={t('Universal Schedule Standard')} img='/assets/img/landing/uss_logo.png'>
          <Trans i18nKey='landinginitiatives-uss-paragraph1'>
            The <a href='https://www.universalschedulestandard.org/'>Universal Schedule Standard</a> is a common method to store and transport schedule and breakdown data across all existing and future platforms.
            Using one standard makes the user's data portable allowing them to create a schedule in one application and then transfer that information to another application that might create budgets, call sheets or other useful end products.
            Each company using the standard will reduce their work load, as they can avoid supporting myriad competing formats. These various applications will be lighter and more easily manageable with only one import/export format to support.
            And perhaps most importantly, end users will gain confidence in the entire sector and will more freely use multiple services, with the knowledge that their data is always portable and safe.
          </Trans>
        </SectionFeature>
      
      </div>

    </div>
  )
}
