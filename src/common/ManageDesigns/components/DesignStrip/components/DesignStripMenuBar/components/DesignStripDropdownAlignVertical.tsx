
import { FormatAlignVertical } from 'common'

export function DesignStripDropdownAlignVertical(): JSX.Element {
  
  const handleClick = (eventKey: string|null) => {
    if(eventKey) {
      console.log(eventKey)
    }
  }

  return (
    <FormatAlignVertical callback={handleClick} disabled={false} selectedAlign='top' />
  )
}