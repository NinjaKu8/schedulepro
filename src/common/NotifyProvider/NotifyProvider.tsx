import { useState, useCallback, createContext, ReactNode } from 'react'
import { NotifyContainer } from "../NotifyContainer"

type Notify = {
  id: number;
  title: ReactNode;
  message: ReactNode;
}

export interface IContext {
  addNotify: ({title, message}: {title: ReactNode; message: ReactNode}) => void;
  removeNotify: (id: number) => void;
}

let id = 1
const NotifyContext = createContext<IContext>({} as IContext)

const NotifyProvider = ({ children }: { children?: ReactNode }): JSX.Element => {
  const [notifications, setNotifications] = useState<Notify[]>([])

  const addNotify = useCallback(({title, message}: {title: ReactNode; message: ReactNode}): void => {
    setNotifications(notifications => [...notifications, { id: id++, title, message }])
  },[setNotifications])

  const removeNotify = useCallback((id: number): void => {
    setNotifications(notifications => notifications.filter(t => t.id !== id))
  }, [setNotifications])

  return (
    <NotifyContext.Provider value={{ addNotify, removeNotify }}>
      <NotifyContainer notifications={notifications} />
      {children}
    </NotifyContext.Provider>
  )
}

export { NotifyProvider, NotifyContext }
