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

type IssueFormProps = {
  toggle: ()=>void
}

function IssueForm({ toggle }:IssueFormProps ): JSX.Element {
  const { t } = useTranslation()
  return (
    <Row>
      <Col>
        <div className='slide-down'>
          <p>
            <Trans i18nKey='issue-instructions1'>
              Fill out the form below and be sure to include as much information as possible. What were you doing when you experienced the issue? 
            </Trans>
          </p>

          <Form.Group className="mb-3" controlId="issue-name">
            <Form.Label>{t('Name')}</Form.Label>
            <Form.Control type="text" placeholder="Full name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="issue-email">
            <Form.Label>{t('Email address')}</Form.Label>
            <Form.Control type="email" placeholder={`${t('email')}@${t('address')}.com`} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="issue-text">
            <Form.Label>{t('Report Issue')}</Form.Label>
            <Form.Control as="textarea" style={textareaStyle} />
          </Form.Group>
          <Button onClick={toggle}>{t('Send Report')}</Button>
        </div>
      </Col>
    </Row>
  )
}

function IssueSuccess(): JSX.Element {
  const navigate = useNavigate()
  const back = () => navigate(-1)
  const { t } = useTranslation()

  return (
    <Row>
      <Col>
        <div className='slide-down'>
          <p className='lead'>{t('Thank you!')}</p>
          <p>
            <Trans i18nKey='issue-success-instructions1'>
              We're sorry that you experienced an issue, but our experts will being working on a fix right now. We may be in touch if we need more information.
            </Trans>
          </p>
          <Button onClick={back}>{t('Back')}</Button>
        </div>
      </Col>
    </Row>
  )
}

export default function Issue(): JSX.Element {
  const [ sent, toggleSent ] = useToggle(false)
  const { t } = useTranslation()
  return (
    <Container style={containerStyle}>
      <h1 className='display-5 my-4'>{t('Report an Issue')}</h1>
      {sent
        ? <IssueSuccess />
        : <IssueForm toggle={toggleSent} />
      }
    </Container>
  )
}
