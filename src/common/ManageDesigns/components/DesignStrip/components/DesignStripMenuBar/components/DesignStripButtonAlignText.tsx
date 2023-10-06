import { useState } from 'react'
import { FormatAlignText } from 'common'

export function DesignStripButtonAlignText(): JSX.Element {
  const [ align, setAlign ] = useState('left') // temp, dispatch value instead
  
  function handleClick(val: 'left'|'center'|'right'|'justify') {
    setAlign(val)
  }

  return (
    <FormatAlignText callback={handleClick} disabled={false} selectedAlignment={align} />
  )
}