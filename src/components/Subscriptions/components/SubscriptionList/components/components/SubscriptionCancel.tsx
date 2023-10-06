import { useCallback } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Trans, useTranslation } from 'react-i18next'

type Props = {
  show: boolean;
  toggle: () => void;
}

export function SubscriptionCancel({ show, toggle }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleClickCancel = useCallback((): void => {
    console.log('click cancel')
    toggle()
  },[toggle])

  return (
    <Modal size="lg" show={show} onHide={toggle} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{t('Cancel Subscription & Refund')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='lead'>
          <Trans i18nKey='subscriptioncancel-title'>
            You are about to cancel your subscription to Think Crew.
          </Trans>
        </p>
        <p className='text-muted'>
          <Trans i18nKey='subscriptioncancel-instructions-1'>
            This is not undoable. If you cancel your data will still be accessable to you but you will no longer be able to invite users to your projects or to publish or export your data.
          </Trans>
        </p>
        <p className='text-muted'>
          <Trans i18nKey='subscriptioncancel-instructions-2'>
            This cancellation will take effect immediately and you will lose access to all of the above features as soon as you cancel. If you want to continuing using this subscription for a while, try just turning off auto-renew and/or switching to a monthly subscription.
          </Trans>
        </p>
        <p className='text-muted'>
          <Trans i18nKey='subscriptioncancel-instructions-3'>
            If you're owed a partial refund, it will credited back to your card.
          </Trans>
        </p>
        <p className='lead'>
          <Trans i18nKey='subscriptioncancel-instructions-4'>
            Are you sure you want to cancel this subscription?
          </Trans>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={handleClickCancel}>{t('Cancel & Refund')}</Button>
        <Button variant='secondary' onClick={toggle}>{t('Keep Existing Subscription')}</Button>
      </Modal.Footer>
    </Modal>
  )
}
