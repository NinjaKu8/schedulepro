
import { ListItem } from 'common'

interface TempElement {
  _id: string;
  name: string;
  selected: boolean;
}

type Props = {
  callback: (e: React.MouseEvent<HTMLDivElement>)=>void;
  elements: TempElement[];
  style?: React.CSSProperties;
}

export function CategoryElementChooserList({ callback, elements, style }: Props): JSX.Element {
  return (
    <div className='overflow-auto' style={style}>
      {elements.map(element=>(
        <ListItem 
          key={element._id}
          active={element.selected}
          callback={callback}
          id={element._id}
        >
          {element.name}
        </ListItem>
      ))}
    </div>
  )
}
