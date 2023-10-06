import { useCallback } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const containerStyle = { maxWidth: '60em' }

export default function KeyboardReference(): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleBack = useCallback((): void => {
    navigate(-1)
  },[navigate])

  return (
    <Container style={containerStyle} className='mt-4'>
      <h1>{t('Keyboard Reference')}</h1>
      <Row className='mb-3'>
        <Col md={4} className='d-flex flex-column gap-2'>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
        </Col>
        <Col md={4} className='d-flex flex-column gap-2'>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
        </Col>
        <Col md={4} className='d-flex flex-column gap-2'>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
          <div className='d-flex justify-content-between bg-light rounded p-2'>
            <div>{t('New Schedule')}</div>
            <div>⌘ N</div>
          </div>
        </Col>
      </Row>
      <Button onClick={handleBack}>{t('Back')}</Button>
    </Container>
  )
}
