
import { ListInput, ListOverlay, ListSelect } from 'common'
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

export function AutoInputSelect({ callback, disabled, list, selectOnFocus, focusOnMount, value, ...rest}: Props): JSX.Element {

  const { filteredList, handleClickItem, handleOnBlur, handleOnKeyDown, inputRef, selectedId, setInputFocus, setShow, show, tempValue, setTempValue } = useAutoInputSelectState({callback, focusOnMount, list, value})

  return (
    <>
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
      <ListOverlay 
        show={show}
        target={inputRef.current}
      >
        <ListSelect 
          callback={handleClickItem} 
          list={filteredList} 
          selectedId={selectedId}
        />
      </ListOverlay>
    </>
  )
}

