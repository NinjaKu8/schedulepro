import { useCallback, useEffect, useState } from 'react'
import Toast from 'react-bootstrap/Toast'

import { useNotify } from 'hooks'

type Props = {
  id: number; 
  title: React.ReactNode; 
  message: React.ReactNode;
}

const duration = 10000

export function Notify({ id, title, message }: Props): JSX.Element {
  const [ show, setShow ] = useState(false)
  const { removeNotify } = useNotify()

  const handleOnClose = useCallback((): void => {
    setShow(false)
  },[setShow])

  useEffect(() => {
    setShow(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotify(id)
    }, duration + 500)
    return () => clearTimeout(timer)
  }, [id, removeNotify])

  return (
    <Toast className='slide-left mb-2' autohide delay={duration} onClose={handleOnClose} show={show} bg='light'>
      <Toast.Header>{title}</Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  )
}
