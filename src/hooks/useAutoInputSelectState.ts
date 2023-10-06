import { useCallback, useEffect, useRef } from 'react'

import { useInputSelectState, useValueState } from './index'
import { IListSelectItem } from 'common/ListSelect/ListSelect'

type Props = {
  callback: (id: string|null, value?: string) => void;
  focusOnMount?: boolean;
  list: IListSelectItem[];
  value: string;
}

type Response = {
  filteredList: IListSelectItem[];
  handleClickItem: (id: string) => void;
  handleOnBlur: () => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  selectedId: string|null;
  setInputFocus: () => void;
  setSelectedId: React.Dispatch<React.SetStateAction<string|null>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  tempValue: string;
  setTempValue: React.Dispatch<React.SetStateAction<string>>;
}

export const useAutoInputSelectState = ({ callback, focusOnMount, list, value }: Props): Response => {
  const [ tempValue, setTempValue ] = useValueState(value)
  const { selectedId, setSelectedId, show, setShow, filteredList, handleOnKeyDown } = useInputSelectState({list, value: tempValue, setValue: setTempValue, callback})

  const inputRef = useRef<HTMLInputElement>(null)

  const handleClickItem = useCallback((id: string): void => {
    callback(id, tempValue)
    setTempValue('')
    setSelectedId(filteredList[0]?._id)
  },[ callback, filteredList, setTempValue, setSelectedId, tempValue ])

  const handleOnBlur = useCallback((): void => {
    setShow(false)
  },[setShow])

  const setInputFocus = useCallback((): void => {
    inputRef.current?.focus()
  },[inputRef])

  useEffect((): void => { 
    if(focusOnMount) setInputFocus() 
  }, [focusOnMount, setInputFocus])

  return { filteredList, handleClickItem, handleOnBlur, handleOnKeyDown, inputRef, selectedId, setInputFocus, setSelectedId, setShow, show, tempValue, setTempValue }
}