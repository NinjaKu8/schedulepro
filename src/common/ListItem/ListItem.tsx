import { ReactNode, useEffect, useRef } from 'react'
import classnames from 'classnames'

type Props = {
  active?: boolean;
  callback: (e:React.MouseEvent<HTMLDivElement>)=>void;
  children: ReactNode;
  className?: string;
  id: string;
}

export const ListItem = ({ active, callback, children, className, id }: Props): JSX.Element => {

  const listItemTarget = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(active) listItemTarget?.current?.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
  },[active])

  return (
    <div 
      className={classnames('list-item py-1 px-2 pointer', className, { 'bg-primary text-light': active })}
      onClick={callback}
      data-itemid={id}
      ref={listItemTarget}
    >
      {children}
    </div>
  )
}
