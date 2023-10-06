
import { NavSimple } from 'common'
import { BreakdownButtonDelete, BreakdownButtonNew, BreakdownButtonNext, BreakdownButtonPrev } from './components'

export function BreakdownMenuBar(): JSX.Element {
  return (
    <NavSimple>
      <div className='d-flex gap-1 flex-wrap'>
        <BreakdownButtonNew />
        <BreakdownButtonDelete />
      </div>
      <div className='d-flex gap-1 flex-wrap ms-auto'>
        <BreakdownButtonPrev />
        <BreakdownButtonNext />
      </div>
    </NavSimple>
  )
}
