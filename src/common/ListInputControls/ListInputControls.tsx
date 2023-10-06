import { useCallback } from 'react'
import { RxCaretDown, RxDividerVertical, RxCross2 } from 'react-icons/rx'

type Props = {
  hasContent: boolean;
  setValue: (v: string)=>void;
  setFocus: ()=>void;
}

export function ListInputControls({ hasContent, setValue, setFocus }: Props): JSX.Element {

  const handleCancel = useCallback((): void => {
    setValue('')
    setFocus()
  },[setValue, setFocus])
  
  return (
    <>
      {hasContent &&
        <>
          <RxCross2 
            className='position-absolute end-0 h-100 me-5 text-gray-400 pointer text-hover-dark pointer'
            onClick={handleCancel} 
          />
          <RxDividerVertical 
            className='position-absolute end-0 h-100 me-4 fs-4 text-gray-400' 
          />
        </>
      }
      <RxCaretDown 
        className='position-absolute end-0 h-100 me-1 fs-4 text-gray-400 text-hover-dark pointer'
        onClick={setFocus} 
      />
    </>
  )
}
