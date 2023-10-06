import { useState, useEffect, Dispatch, SetStateAction } from 'react'

export const useValueState = ( initialValue: string = '' ): [string, Dispatch<SetStateAction<string>>] => {
  const [ value, setValue ] = useState(initialValue)
  useEffect(()=>{ setValue(initialValue) }, [initialValue]) // if initialValue changes, update the value in state
  return [ value, setValue ]
}