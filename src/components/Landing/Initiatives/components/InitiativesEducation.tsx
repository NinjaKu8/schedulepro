import { Trans, useTranslation } from 'react-i18next'

import { SectionFeature, SectionFeatureSkewed } from 'common'

export function InitiativesEducation(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='slide-down'>
      <div className='mb-5'>
        <h2 className='display-5 mt-4 text-center fw-bold'>{t('Education Initiative')}</h2>
        <p className='lead text-center'>
          <Trans i18nKey='landinginitiatives-education-title'>
            The next generation of filmmakers need access to professional tools
          </Trans>
        </p>
      </div>

      <div className='d-flex flex-column gap-4'>
      
        <SectionFeature title={t('Title1')} img='/assets/img/landing/school.jpg'>
          <Trans i18nKey='landinginitiatives-education-paragraph1'>
            The next generation of filmmakers needs access to professional tools. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus.
          </Trans>
        </SectionFeature>

        <SectionFeatureSkewed title={t('Title2')} img='/assets/img/landing/students.jpg' blob1 >
          <Trans i18nKey='landinginitiatives-education-paragraph2'>
            The next generation of filmmakers needs access to professional tools. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus.
          </Trans>
        </SectionFeatureSkewed>
      
      </div>

    </div>
  )
}
