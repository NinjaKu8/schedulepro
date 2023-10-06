import { forwardRef, useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import { ListInputControls } from 'common'

type Props = {
  onBlur: ()=>void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>)=>void;
  selectOnFocus: boolean;
  setInputFocus: ()=>void;
  setShow: (b: boolean)=>void;
  setValue: (v: string)=>void;
  value: string;
  [x: string]: any;
}

export const ListInputSingle = forwardRef<HTMLInputElement, Props>(({ onBlur, onKeyDown, selectOnFocus, setInputFocus, setShow, setValue, value, ...rest}: Props, ref): JSX.Element => {

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value
    return setValue(newValue)
  },[setValue])

  const handleOnFocus = useCallback((): void => {
    if(selectOnFocus) setInputFocus()
    setShow(true)
  },[selectOnFocus, setShow, setInputFocus])

  return (
    <>
      <Form.Control
        onBlur={onBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onKeyDown={onKeyDown}
        ref={ref}
        value={value}
        {...rest}
      />
      <ListInputControls hasContent={value.length>0} setValue={setValue} setFocus={setInputFocus} />
    </>
  )
})
