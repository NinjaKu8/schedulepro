import { Trans, useTranslation } from 'react-i18next'

import { SectionCallToAction, SectionFeature, SectionFeatureSkewed } from 'common'

export default function SectionFeatures(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='slide-down'>
      <h1 className='display-4 text-center fw-bold mt-5'>{t('The Features You Need')}</h1>
      <p className='lead text-center'>{t('Think Crew offers more Features than any other scheduling software.')}</p>

      <div className='d-flex flex-column gap-5 mt-5'>

        <SectionFeature title={t('Collaborate')} img='/assets/img/landing/collaborate.jpg'> 
          <Trans i18nKey='landingfeatures-collaborate'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus.
          </Trans>
        </SectionFeature>

        <SectionFeatureSkewed title={t('Built for cross boarding')} img='/assets/img/landing/collaborate.jpg' blob1 >
          <Trans i18nKey='landingfeatures-crossboarding'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus. 
          </Trans>
        </SectionFeatureSkewed>

        <SectionFeature title={t('Use Anywhere... on Any Device')} img='/assets/img/landing/devices.jpg'> 
          <Trans i18nKey='landingfeatures-anydevice'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus.
          </Trans>
        </SectionFeature>

        <SectionFeatureSkewed title={t('Real Time Day Out of Days')} img='/assets/img/landing/collaborate.jpg' blob2 isRising >
          <Trans i18nKey='landingfeatures-dood'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus. 
          </Trans>
        </SectionFeatureSkewed>

        <SectionFeature title={t('Import FDX and PDF Scripts')} img='/assets/img/landing/devices.jpg'> 
          <Trans i18nKey='landingfeatures-scripts'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus.
          </Trans>
        </SectionFeature>

        <SectionFeatureSkewed title={t('Strip Designer')} img='/assets/img/landing/collaborate.jpg' blob3 >
          <Trans i18nKey='landingfeatures-designer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus. 
          </Trans>
        </SectionFeatureSkewed>

        <SectionFeature title={t('Export Your Data')} img='/assets/img/landing/devices.jpg'> 
          <Trans i18nKey='landingfeatures-export'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus.
          </Trans>
        </SectionFeature>

        <SectionCallToAction title={t('Want to experience it yourself?')}>
         <Trans i18nKey='landingfeatures-experience'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit.
          </Trans>
        </SectionCallToAction>

      </div>
    </div>
  )
}