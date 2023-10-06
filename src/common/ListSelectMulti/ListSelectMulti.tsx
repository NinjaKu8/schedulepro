
import { ListItem } from 'common'
import { IListSelectItem } from 'common/ListSelect/ListSelect'

type Props = {
  callback: (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>void;
  className?: string;
  list: IListSelectItem[];
  message?: string;
  selectedIds: string[];
  style?: React.CSSProperties;
}

export function ListSelectMulti({ callback, className, list, message, selectedIds, style }: Props): JSX.Element {
  return (
    <div className={`h-100 overflow-scroll ${className}`} style={style}>
      {list.length===0 && message
        ? <p className='text-muted small p-2'>{message}</p>
        : list.map(item=>(
            <ListItem 
              key={item._id}
              active={selectedIds.includes(item._id)}
              callback={callback}
              className='user-select-none'
              id={item._id}
            >
              {item.name}
            </ListItem>
          ))
      }
    </div>
  ) 
}