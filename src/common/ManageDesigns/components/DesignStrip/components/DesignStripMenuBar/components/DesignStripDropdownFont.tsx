
import { FormatFont } from 'common/FormatFont'

const formatFontStyle = { width: '12em' }

export function DesignStripDropdownFont(): JSX.Element {
  
  const handleClick = (eventKey: string|null) => {
    if(eventKey) {
      console.log(eventKey)
    }
  }

  return (
    <FormatFont callback={handleClick} disabled={false} selectedId='0' style={formatFontStyle} />
  )
}