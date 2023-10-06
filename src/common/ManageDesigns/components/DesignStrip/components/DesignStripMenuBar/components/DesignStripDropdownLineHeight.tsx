
import { FormatLineHeight } from 'common/FormatLineHeight'

export function DesignStripDropdownLineHeight(): JSX.Element {
  
  const handleClick = (eventKey: string|null) => {
    if(eventKey) {
      console.log(eventKey)
    }
  }

  return (
    <FormatLineHeight callback={handleClick} disabled={false} selectedSize='1.5' />
  )
}