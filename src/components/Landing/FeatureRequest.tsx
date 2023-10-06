import { useCallback } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Trans, useTranslation } from 'react-i18next'
import { useToggle } from 'hooks'
import { useNavigate } from 'react-router-dom'

const containerStyle={ maxWidth: '40em'}
const textareaStyle={ minHeight: '10em'}

type FeatureRequestFormProps = {
  toggle: ()=>void
}

function FeatureRequestForm({ toggle }:FeatureRequestFormProps ): JSX.Element {
  const { t } = useTranslation()
  return (
    <Row>
      <Col>
        <div className='slide-down'>
          <p>
            <Trans i18nKey='featurerequest-form-title'>
              We love new ideas and we implement a lot of what we receive. Have a great addition to Think Crew? Tell us about it!
            </Trans>
          </p>

          <Form.Group className="mb-3" controlId="issue-name">
            <Form.Label>{t('Name')}</Form.Label>
            <Form.Control type="text" placeholder="Full name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="issue-email">
            <Form.Label>{t('Email address')}</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="issue-text">
            <Form.Label>{t('Describe the feature')}</Form.Label>
            <Form.Control as="textarea" style={textareaStyle} />
          </Form.Group>
          <Button onClick={toggle}>{t('Send Feature Request')}</Button>
        </div>
      </Col>
    </Row>
  )
}

function FeatureRequestSuccess(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleBack = useCallback((): void => {
    navigate(-1)
  },[navigate])

  return (
    <Row>
      <Col>
        <div className='slide-down'>
          <p className='lead'>{t("Thank you!")} 🎉</p>
          <p>
            <Trans i18nKey='featurerequest-success-instructions1'>
              We will take a look at your idea and consider adding it to the site! Check back in the future to see if it's been added.
            </Trans>
          </p>
          <Button onClick={handleBack}>{t('Back')}</Button>
        </div>
      </Col>
    </Row>
  )
}

export default function FeatureRequest(): JSX.Element {
  const [ sent, toggleSent ] = useToggle(false)
  const { t } = useTranslation()
  return (
    <Container style={containerStyle}>
      <h1 className='display-5 my-4'>{t('Feature Request')}</h1>
      {sent
        ? <FeatureRequestSuccess />
        : <FeatureRequestForm toggle={toggleSent} />
      }
    </Container>
  )
}
