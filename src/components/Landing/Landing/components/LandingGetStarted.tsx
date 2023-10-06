import { Trans, useTranslation } from 'react-i18next'

import { SectionCallToAction } from 'common'

export function LandingGetStarted(): JSX.Element {
  const { t } = useTranslation()
  return (
    <SectionCallToAction title={t('Get started with Think Crew today')}>
      <Trans i18nKey='landing-getstarted'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit.
      </Trans>
    </SectionCallToAction>
  )
}
