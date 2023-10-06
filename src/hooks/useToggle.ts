import { useState } from 'react'

export const useToggle = (initialValue: boolean): [boolean, ()=>void] => {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue((value)=>!value)
  return [ value, toggle ]
}