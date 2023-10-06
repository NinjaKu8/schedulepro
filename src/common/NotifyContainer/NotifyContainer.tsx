import { ReactNode } from 'react'
import { createPortal } from "react-dom"

import { Notify } from "../Notify"

type Props = {
  id: number;
  title: ReactNode;
  message: ReactNode;
}

const notificationStyle = { top: '1em', right: '1em', zIndex: '9999' }

export const NotifyContainer = ({ notifications }: { notifications: Props[] }): JSX.Element => {
  return createPortal(
    <div className='position-absolute' style={notificationStyle}>
      {notifications.map((notification: Props) => (
        <Notify
          key={notification.id}
          id={notification.id}
          title={notification.title}
          message={notification.message}
        />
      ))}
    </div>,
    document.body
  )
}
