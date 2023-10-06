import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

type Props = {
  callback: () => void;
  toggle: () => void;
  show: boolean;
}

export function ModalDelete({ callback, show, toggle }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleClickDelete = useCallback((): void => {
    toggle()
    callback()
  },[callback, toggle])

  return (
    <Modal show={show} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>{t('Delete')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {t('Are you sure that you want to delete this? This is not undoable.')}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggle}>{t('Cancel')}</Button>
        <Button variant="danger" onClick={handleClickDelete}>{t('Delete')}</Button>
      </Modal.Footer>
    </Modal>
  )
}