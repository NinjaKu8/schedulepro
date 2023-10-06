import Modal from 'react-bootstrap/Modal'

import { Login } from 'common'

type Props = {
  show: boolean;
  toggle: () => void;
}

export function ModalLogin({ show, toggle }: Props): JSX.Element {

  return (
    <Modal show={show} onHide={toggle}>
      <Modal.Body>
        <Login toggle={toggle} />
      </Modal.Body>
    </Modal>
  )
}
