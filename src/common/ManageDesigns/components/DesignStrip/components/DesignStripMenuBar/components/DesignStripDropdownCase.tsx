
import { FormatCase } from 'common/FormatCase'

export function DesignStripDropdownCase(): JSX.Element {
  
  const handleClick = (eventKey: string|null) => {
    if(eventKey) {
      console.log(eventKey)
    }
  }

  return (
    <FormatCase callback={handleClick} disabled={false} selectedCase='normal' />
  )
}