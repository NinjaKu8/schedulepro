import { useAppSelector } from 'store/hooks'
import { useEffect } from 'react'
import { BsCheckCircleFill } from "react-icons/bs"
import { BsCircle } from "react-icons/bs"
import classnames from 'classnames'

import { useDelayedUnmounting } from 'hooks'

type Props = {
  color?: string;
  isSelected?: boolean;
}

const cardSelectorContainerStyle = {
  filter: 'drop-shadow(.2em .2em .2em rgba(0, 0, 0, 0.25))',
  zIndex: 1,
}

const cardSelectorStyle = { 
  top: '-.2em', 
  left: '-.2em', 
  width: '4.4em', 
  height: '4.4em', 
  padding: '.6em', 
  clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)',
}

export function CardSelector({ isSelected=true, color }: Props): JSX.Element | null {
  const isCardsSelect: boolean = useAppSelector(state=>state.local.isCardsSelect)
  const [state, onMount, onUnmount] = useDelayedUnmounting(470)

  useEffect(()=>{
    if(isCardsSelect && state==='unmounted') onMount()
    if(!isCardsSelect && state==='mounted') onUnmount()
  },[isCardsSelect, state, onMount, onUnmount])

  return (
    state!=='unmounted'
      ? <Selector className={`${state==='unmounting' ? 'card-selector-exit' : ''}`} color={color} isSelected={isSelected} />
      : null
  )
}

function Selector({ className, color, isSelected }: { className: string; color?: string; isSelected: boolean }): JSX.Element {

  function handleClick(): void {
    console.log('click selector')
  }

  return (
    /* container div is used because filter:drop-shadow cant be applied to same div as clipPath */
    <div 
      style={cardSelectorContainerStyle}
      onClick={handleClick}
    >
      <div 
        className={classnames(`position-absolute pointer bg-${color} card-selector-enter ${className}`)} 
        style={cardSelectorStyle}
      >
        {isSelected 
          ? <BsCheckCircleFill className='text-white fs-4' />
          : <BsCircle className='text-white fs-4' />
        }
      </div>
    </div>
  )
}
