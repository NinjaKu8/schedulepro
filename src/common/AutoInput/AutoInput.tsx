import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'

import { getOnKeyDown } from 'helpers'
import { useValueState } from 'hooks'

type Props = {
  blur?: boolean;
  callback: (value: string) => void;
  disabled?: boolean;
  regex?: RegExp;
  selectOnFocus?: boolean;
  value: string;
  [x: string]: any;
}

export function AutoInput({ blur=true, callback, disabled, regex, selectOnFocus, value, ...rest}: Props): JSX.Element {
  
  const [ tempValue, setTempValue ] = useValueState(value)

  const cleanWithRegex = useCallback((value: string)=>{
    if(regex) {
      const cleanArray = value.toString().match(regex)
      return cleanArray?.length ? cleanArray[0] : ''
    }
    return value
  },[regex])

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value
    const cleanedValue: string = newValue ? cleanWithRegex(newValue) : ''
    return setTempValue(cleanedValue)
  },[ cleanWithRegex, setTempValue])

  const handleOnKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>): void => {
    const key = getOnKeyDown(e)
    switch(key) {
      case 'Enter': callback(tempValue); e.currentTarget.blur(); break;
      case 'Escape': e.preventDefault(); setTempValue(value); callback(value); e.currentTarget.blur(); break;
      default: break;
    }
  },[ callback, setTempValue, tempValue, value ])

  const handleOnFocus = useCallback((e: React.FocusEvent<HTMLInputElement>): void => {
    if(selectOnFocus) e.target.select()
  },[selectOnFocus])

  const handleOnBlur = useCallback((): void => {
    if(blur) callback(tempValue)
  },[ blur, callback, tempValue ])

  return (
    <Form.Control
      disabled={disabled}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      onKeyDown={handleOnKeyDown}
      value={tempValue ? tempValue : ''}
      {...rest}
    />
  )
}
