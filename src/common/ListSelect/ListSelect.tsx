import { forwardRef, useCallback } from 'react'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'

import { ListItem } from 'common'

export interface IListSelectItem {
  _id: string;
  name: string;
  selected: boolean;
}

type Props = {
  callback: (id:string)=>void;
  className?: string;
  list: IListSelectItem[];
  selectedId?: string|null;
  style?: React.CSSProperties;
}

export const ListSelect = forwardRef<HTMLDivElement, Props>(({ callback, className, list, selectedId, style }: Props, ref): JSX.Element => {
  const { t } = useTranslation()

  const handleSelectItem = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault()
    const id = e.currentTarget.dataset.itemid
    if(_.isString(id)) callback(id)
  },[callback])

  return (
    <div className='h-100 overflow-scroll' style={style} ref={ref}>
      {list.length===0 
        ? <p className='text-muted small p-2'>{t('There are no more items in this list')}</p>
        : list.map(item=>(
            <ListItem 
              key={item._id}
              active={selectedId===item._id}
              callback={handleSelectItem}
              className={className}
              id={item._id}
            >
              {item.name}
            </ListItem>
          ))
      }
    </div>
  )
})
