
import { IListSelectItem } from 'common/ListSelect/ListSelect'
import { getOnKeyDown, getPreviousItemInArray, getNextItemInArray } from 'helpers'

type Props = {
  callback: (id: string|null, value: string)=>void;
  event: React.KeyboardEvent<HTMLInputElement>;
  filteredList: IListSelectItem[],
  selectedId: string|null;
  setSelectedId: (v: string|null)=>void;
  setValue: (v: string)=>void;
  value: string;
}

export function handleListInputKeyDown({ callback, event, filteredList, selectedId, setSelectedId, setValue, value }: Props): void {
  const key = getOnKeyDown(event)
  switch(key) {
    case 'Enter': 
    event.preventDefault()
      setValue('')
      setSelectedId(filteredList[0]?._id)
      callback(selectedId, value)
      break
    case 'Escape': 
    event.preventDefault() 
      setValue('') 
      event.currentTarget.blur() 
      break
    case 'ArrowLeft':
    case 'ArrowUp': 
      setSelectedId(getPreviousItemInArray({ arr: filteredList.map(i=>i._id), currentItem: selectedId })) 
      break
    case 'ArrowRight':
    case 'ArrowDown': 
      setSelectedId(getNextItemInArray({ arr: filteredList.map(i=>i._id), currentItem: selectedId })) 
      break
    default: break
  }
}