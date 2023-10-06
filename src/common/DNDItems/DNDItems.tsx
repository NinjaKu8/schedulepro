import { DNDDroppable, DNDSortable } from "common"
import { DNDItem } from "types/types"

type Props = {
  children(item: DNDItem): JSX.Element;
  className?: string;
  disabled: boolean;
  handle?: boolean;
  id: DNDItem;
  items: DNDItem[];
  onSelect: (id: DNDItem, shiftKey: boolean, metaKey: boolean)=>void;
  strategy?: 'vertical'|'horizontal'|'grid';
  [x: string]: any;
}

export function DNDItems({ children, className, disabled, handle, id, items, onSelect, strategy, ...rest }: Props): JSX.Element {
  return (
    <DNDDroppable id={id} items={items} strategy={strategy} {...rest}>
      <div className={className}>
        {items.map((item: DNDItem)=>(
          <DNDSortable key={item} id={item} containerId={id} disabled={disabled} handle={handle} onSelect={onSelect}>
            {children(item)}
          </DNDSortable>
        ))}
      </div>
    </DNDDroppable>
  )
}
