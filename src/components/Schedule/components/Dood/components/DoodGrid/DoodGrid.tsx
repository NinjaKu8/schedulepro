
import { DoodRows, DoodHeaders } from './components'

const doodHeadersContainerStyle = { zIndex: 4 }
const doodRowsContainerStyle = { zIndex: 3 }

export function DoodGrid(): JSX.Element {
  return (
    <div className='dood overflow-auto border-top'>
      <div className='d-flex position-sticky top-0' style={doodHeadersContainerStyle}>
        <DoodHeaders />
      </div>
      <div className='d-flex' style={doodRowsContainerStyle}>
        <DoodRows />
      </div>
    </div>
  ) 
}
