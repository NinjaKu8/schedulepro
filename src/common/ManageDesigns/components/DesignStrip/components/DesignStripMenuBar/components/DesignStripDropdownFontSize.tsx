
import { FormatFontSize } from 'common/FormatFontSize'

const formatFontSizeStyle = { width: '4em' }

export function DesignStripDropdownFontSize(): JSX.Element {
  
  const handleClick = (eventKey: string|null) => {
    if(eventKey) {
      console.log(eventKey)
    }
  }

  return (
    <FormatFontSize callback={handleClick} disabled={false} selectedSize='10' style={formatFontSizeStyle} />
  )
}