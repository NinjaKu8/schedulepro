import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react'

import { useFilteredArray } from 'hooks'
import { IListSelectItem } from 'common/ListSelect/ListSelect'
import { handleListInputKeyDown } from 'helpers'

type Props = {
  callback: (id:string|null, v:string)=>void;
  list: IListSelectItem[];
  setValue: (v:string)=>void;
  value: string;
}

type Response = {
  filteredList: IListSelectItem[];
  handleOnKeyDown: (event: React.KeyboardEvent<HTMLInputElement>)=>void;
  selectedId: string|null; 
  setSelectedId: Dispatch<SetStateAction<string|null>>; 
  setShow: Dispatch<SetStateAction<boolean>>; 
  show: boolean; 
}

export const useInputSelectState = ({ callback, list, setValue, value }: Props): Response => {
  // const [ initialValue ] = useState<string>(value) // keep initial value, return full unfiltered list if it's unchanged
  const [ selectedId, setSelectedId ] = useState<string|null>(null)
  const [ show, setShow ] = useState<boolean>(false) 

  const filteredList = useFilteredArray(list, value, true)

  useEffect(()=>{ if(filteredList.length) setSelectedId(filteredList[0]?._id) }, [filteredList])

  const handleOnKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>): void => {
    handleListInputKeyDown({ callback, event, filteredList, selectedId, setSelectedId, setValue, value })
  },[callback, filteredList, selectedId, setSelectedId, setValue, value])

  return { filteredList, handleOnKeyDown, selectedId, setSelectedId, setShow, show }
}