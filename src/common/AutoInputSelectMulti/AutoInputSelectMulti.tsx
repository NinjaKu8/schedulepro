import { useRef, useCallback, useState } from 'react'

import { ListInputMulti, ListOverlay, ListSelect } from 'common'
import { IListSelectItem } from 'common/ListSelect/ListSelect'
import { useValueState, useInputSelectState, useOnClickOutside } from 'hooks'
import { orderArrayByIds } from 'helpers'

type Props = {
  callback: (id: string|null, value?: string) => void;
  disabled?: boolean;
  list: IListSelectItem[]; // arr of objects of all potential items in list
  selectedIds: string[];   // arr of ids that are already multi selected
}

export function AutoInputSelectMulti({ callback, disabled, list, selectedIds }: Props): JSX.Element {
  const [ tempValue, setTempValue ] = useValueState('')
  const [ isFocus, setIsFocus ] = useState(false)
  const { selectedId, setSelectedId, show, setShow, filteredList, handleOnKeyDown } = useInputSelectState({list, value: tempValue, setValue: setTempValue, callback})

  const listInputMultiRef = useRef<HTMLDivElement>(null)
  const listSelectRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback((): void => {
    setIsFocus(false)
    setShow(false)
  },[setIsFocus, setShow])

  const handleClickListItem = useCallback((id: string): void => {
    if(disabled) return
    callback(id, tempValue)
    setTempValue('')
    setSelectedId(filteredList[0]?._id)
  },[ callback, disabled, filteredList, setTempValue, setSelectedId, tempValue ])

  const handleFocus = useCallback((): void => {
    if(disabled) return
    setIsFocus(true)
    setShow(true)
  },[disabled, setIsFocus, setShow])

  useOnClickOutside<HTMLDivElement>([listInputMultiRef, listSelectRef], handleClickOutside)
  const listSelected = orderArrayByIds<IListSelectItem>(list, selectedIds)

  return (
    <>
      <ListInputMulti 
        disabled={disabled}
        handleClick={handleClickListItem}
        handleFocus={handleFocus}
        handleKeyDown={handleOnKeyDown}
        isFocus={isFocus}
        listSelected={listSelected}
        ref={listInputMultiRef}
        setValue={setTempValue}
        value={tempValue}
      />
      <ListOverlay 
        show={show}
        target={listInputMultiRef.current}
      >
        <ListSelect 
          callback={handleClickListItem} 
          list={filteredList.filter(i=>!selectedIds.includes(i._id))} 
          ref={listSelectRef}
          selectedId={selectedId}
        />
      </ListOverlay>
    </>
  )
}
