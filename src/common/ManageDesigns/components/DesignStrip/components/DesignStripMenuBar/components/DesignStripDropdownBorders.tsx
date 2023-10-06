
import { FormatBorders } from 'common/FormatBorders'

export function DesignStripDropdownBorders(): JSX.Element {
  
  const handleClick = (eventKey: string|null) => {
    if(eventKey) {
      console.log(eventKey)
    }
  }

  return (
    <FormatBorders callback={handleClick} disabled={false} selectedBorders={['top','left']} />
  )
}