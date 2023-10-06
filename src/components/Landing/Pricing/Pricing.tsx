import Container from 'react-bootstrap/Container'
import { Trans, useTranslation } from 'react-i18next'

import { PricingCards } from 'common'

const containerStyle = { maxWidth: '75em'}
const textStyle = { maxWidth: '55em'}

export default function Pricing() {
  const { t } = useTranslation()
  return (
    <Container style={containerStyle} className='mb-4 slide-down'>
      <div className='d-flex flex-column gap-2 my-5'>
        <h1 className='display-4 text-center fw-bold'>{t('Transparent Pricing')}</h1>
        <p className='lead text-center'>
          <Trans i18nKey='pricing-title'>
            Our plans have everything you need to take your schedule to the next level.<br/>No hidden fees.
          </Trans>
        </p>
        <p className='text-center mx-auto' style={textStyle}>
          <Trans i18nKey='pricing-info'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus leo quis metus rhoncus, a lacinia orci luctus. Etiam elementum lacus eu nunc euismod suscipit. Vestibulum sollicitudin dui ligula, ut dapibus nulla tempus in. Quisque scelerisque nisi magna, aliquet hendrerit lectus volutpat non. Nullam accumsan ullamcorper sem id molestie. Aliquam iaculis, dui finibus porttitor porttitor, ante turpis aliquet sapien, accumsan commodo tortor diam et ligula. Nulla pharetra volutpat dapibus. Ut sit amet mattis dolor. Pellentesque laoreet est id ante volutpat vehicula at quis lacus.
          </Trans>
        </p>
      </div>
      <PricingCards />
    </Container>
  )
}
