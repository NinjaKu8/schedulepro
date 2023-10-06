
import { FormatAlign } from 'common'

export function DesignStripDropdownAlign(): JSX.Element {
  
  const handleClick = (eventKey: string|null) => {
    if(eventKey) {
      console.log(eventKey)
    }
  }

  return (
    <FormatAlign callback={handleClick} disabled={false} selectedAlign='center' />
  )
}