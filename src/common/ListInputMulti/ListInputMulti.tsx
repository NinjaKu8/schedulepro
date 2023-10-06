import { forwardRef, useRef } from 'react'
import classnames from 'classnames'

import { ListInputControls } from 'common'
import { ListInputMultiItem } from './components'
import { IListSelectItem } from 'common/ListSelect/ListSelect'

type Props = {
  disabled?: boolean;
  handleClick: (id:string)=>void;
  handleFocus: ()=>void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>)=>void;
  isFocus: boolean;
  listSelected: IListSelectItem[];
  setValue: (v:string)=>void;
  value: string;
}

const multiInputStyle = { minHeight: '2.4em'}

export const ListInputMulti = forwardRef<HTMLDivElement, Props>(({ disabled, handleClick, handleFocus, handleKeyDown, isFocus, listSelected, setValue, value }: Props, ref): JSX.Element => {

  const inputRef = useRef<HTMLInputElement>(null)

  function handleClickParent(): void {
    inputRef?.current?.focus()
    handleFocus()
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = e.target.value
    return setValue(newValue)
  }

  return (
    <div>
      <div 
        className={classnames('list-input__multi d-flex align-items-center gap-1 flex-wrap w-100', isFocus && 'focus', disabled && 'bg-gray-200')} 
        style={multiInputStyle}
        onClick={handleClickParent}
        ref={ref}
      >
        {listSelected.map(item=>(
          <ListInputMultiItem key={item._id} handleClick={handleClick} _id={item._id} name={item.name} />
        ))}
        {isFocus &&
          <input 
            type='text'
            autoFocus
            className='flex-fill'
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            value={value}
          />
        }
      </div>
      <ListInputControls hasContent={value.length>0} setValue={setValue} setFocus={handleFocus} />
    </div>
  )
})
