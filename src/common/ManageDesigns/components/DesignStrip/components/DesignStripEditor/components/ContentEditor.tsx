import { SelectoContainer } from './SelectoContainer'

import './main.css'

const rulerStyle = {
  height: `100%`,
  width: `100%`,
  border: '1px solid #ccc',
}

export function ContentEditor() {
  return (
    <div className="root" style={rulerStyle}>
      <SelectoContainer />
    </div>
  )
}
