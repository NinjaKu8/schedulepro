import { ReactNode } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import classnames from 'classnames'

import { OffcanvasTCFooter } from './components'

type Props = {
  children?: ReactNode;
  footer?: ReactNode;
  hasOverflow?: boolean;
  hasPadding?: boolean;
  show: boolean;
  showClose?: boolean;
  title?: JSX.Element | string;
  toggle: () => void;
  [x: string]: any;
}

export function OffcanvasTC({ children, hasPadding=true, hasOverflow=true, show, showClose, footer, title, toggle, ...rest }: Props): JSX.Element {

  return (
    <Offcanvas show={show} onHide={toggle} placement='end' className='offcanvas-medium' {...rest}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={classnames('p-0 h-100',{'p-3': hasPadding, 'overflow-auto': hasOverflow, 'overflow-hidden': !hasOverflow})} >
        {children}
      </Offcanvas.Body>
      <OffcanvasTCFooter showClose={showClose} toggle={toggle}>
        {footer}
      </OffcanvasTCFooter>
    </Offcanvas>
  )
}
