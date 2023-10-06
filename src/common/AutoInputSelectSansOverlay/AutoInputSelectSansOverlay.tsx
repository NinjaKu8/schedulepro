
import { ListInput, ListSelect } from 'common'
import { IListSelectItem } from 'common/ListSelect/ListSelect'
import { useAutoInputSelectState } from 'hooks'

type Props = {
  callback: (id: string|null, value?: string) => void;
  disabled?: boolean;
  list: IListSelectItem[];
  selectOnFocus?: boolean;
  focusOnMount?: boolean;
  value: string;
  [x: string]: any; 
}

export function AutoInputSelectSansOverlay({ callback, disabled, list, selectOnFocus, focusOnMount, value, ...rest}: Props): JSX.Element {

  const { filteredList, handleClickItem, handleOnBlur, handleOnKeyDown, inputRef, selectedId, setInputFocus, setShow, tempValue, setTempValue } = useAutoInputSelectState({callback, focusOnMount, list, value})

  return (
    <>
      <div className='flex-shrink-0'>
        <ListInput 
          onKeyDown={handleOnKeyDown}
          onBlur={handleOnBlur}
          ref={inputRef}
          selectOnFocus={selectOnFocus}
          setInputFocus={setInputFocus}
          setShow={setShow}
          setValue={setTempValue}
          value={tempValue}
          {...rest}
        />
      </div>
      <div className='overflow-scroll'>
        <ListSelect 
          callback={handleClickItem} 
          list={filteredList} 
          selectedId={selectedId}
        />
      </div>
    </>
  )
}

