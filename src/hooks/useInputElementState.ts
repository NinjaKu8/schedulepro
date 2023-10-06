import { useState, useCallback } from 'react'

type Props = {
  callback?: ()=>void;
  breakdownId: string;
  initialElementName: string|null;
}

type Response = {
  elementName: string;
  isCategorySelect: boolean;
  handleSelectElement: (id: string|null, value?: string) => void;
  handleSelectCategory: (id: string|null, value?: string) => void;
  handleBackButton: () => void;
}

export const useInputElementState = ({ callback, breakdownId, initialElementName }: Props): Response => {
  const [ elementName, setElementName ] = useState<string>(initialElementName ?? '')
  const [ isCategorySelect, setIsCategorySelect ] = useState(false)

  const reset = useCallback((): void => {
    setElementName('')
    setIsCategorySelect(false)
  },[setElementName, setIsCategorySelect])

  const handleSelectElement = useCallback((id: string|null, value?: string): void => {
    if(!id) return
    if(id==='create' && value) {
      console.log('breakdownId', breakdownId, 'create item:', value, ', now pick category...')
      setElementName(value)
      setIsCategorySelect(true)
    } else {
      console.log('breakdownId', breakdownId, 'add remove elements:', id)
      if(callback) callback()
    }
  },[callback, breakdownId, setElementName, setIsCategorySelect])

  const handleSelectCategory = useCallback((id: string|null, value?: string): void => {
    if(!id) return
    if(id==='create' && value) {
      console.log('breakdownId', breakdownId, 'create category', value, elementName)
    } else {
      console.log('breakdownId', breakdownId, 'select category', id, elementName)
    }
    reset()
    if(callback) callback()
  },[callback, elementName, breakdownId, reset])

  const handleBackButton = useCallback((): void => {
    setIsCategorySelect(false)
  },[setIsCategorySelect])

  return { elementName, isCategorySelect, handleSelectElement, handleSelectCategory, handleBackButton }
}