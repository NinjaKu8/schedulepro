import { useToggle } from 'hooks'
import { useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import { BsInfoCircle } from 'react-icons/bs'

type Props = {
  children: string | JSX.Element;
  className?: string;
  header?: string | JSX.Element;
  [x: string]: any;
}

export function PopoverInfo({ children, className, header, ...rest }: Props): JSX.Element {
  const [ show, toggleShow ] = useToggle(false)
  const triggerTarget = useRef<HTMLDivElement>(null)

  return (
    <>
      <div ref={triggerTarget} onClick={toggleShow}>
        <BsInfoCircle className='text-secondary' />
      </div>      
      <Overlay target={triggerTarget.current} show={show} onHide={toggleShow} placement='auto' flip rootClose>
        <Popover className='rounded-1 shadow overflow-hidden' {...rest}>
          {header && <Popover.Header as='h6'>{header}</Popover.Header>}
          <Popover.Body className={`d-flex gap-3 align-items-center ${className}`}>
            <div><BsInfoCircle className='text-info' /></div>
            <div>{children}</div>
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
  )
}