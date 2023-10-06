import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { Trans, useTranslation } from 'react-i18next'

import { OffcanvasTC } from 'common'

type Props = {
  show: boolean;
  toggle: () => void;
}

type ManageFooterProps = {
  handleClickSave: () => void;
  toggle: () => void;
}

const cardStyles = { width: '18em'}

function ManageFooter({ handleClickSave, toggle }: ManageFooterProps) {
  const { t } = useTranslation()
  return (
    <>
      <Button onClick={handleClickSave} variant='success' className='me-2'>{t('Update Subscription')}</Button>
      <Button onClick={toggle} variant='secondary'>{t('Cancel')}</Button>
    </>
  )
}

export function SubscriptionUpdate({ show, toggle }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleClickSave = useCallback((): void => {
    console.log('click save')
    toggle()
  },[toggle])

  return (
    <OffcanvasTC 
      show={show} 
      toggle={toggle} 
      title={t('Subscription Update')} 
      showClose={false} 
      footer={<ManageFooter handleClickSave={handleClickSave} toggle={toggle}/>} 
    >
      <Container>
        <p>
          <Trans i18nKey='subscriptionupdate-instructions1'>
            If you want to use a different card than the one we have on file for you, please enter the new card information below. The old card information will be replaced with the new information you provide.
          </Trans>
        </p>
        <Card style={cardStyles} className='bg-dark text-light'>
          <Card.Body className=''>
            <div className='d-flex flex-column p-2'>
              <div className='mb-4'>Visa</div>
              <div className='text-center mb-4 lead'>&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&bull;&nbsp;&nbsp;&nbsp;1234</div>
              <div className='ms-auto'>{t('Exp')}: 7/2024</div>              
            </div>
          </Card.Body>
        </Card>
        <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
          <Form.Label>{t('New Credit Card Info')}</Form.Label>
          <Form.Control size='lg' placeholder={t('Card Number')} type='text' autoComplete='cc-number' pattern='[0-9]' />
        </Form.Group>
        <a href="https://stripe.com" id="btn-stripe" className='text-decoration-none' target="_blank" rel="noopener noreferrer">
          <img src="/assets/img/powered_by_stripe.svg" alt="stripe" className="mb-3" />
        </a>
      </Container>
    </OffcanvasTC>
  )
}
