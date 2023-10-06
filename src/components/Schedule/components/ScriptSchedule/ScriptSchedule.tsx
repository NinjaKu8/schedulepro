
import { ScriptMenuBarNavigation, ScriptScene, NavSimple } from 'common'

export function ScriptSchedule(): JSX.Element {
  return (
    <div className='d-flex flex-column h-100 bg-light'>
      <NavSimple>
        <ScriptMenuBarNavigation />
      </NavSimple>
      <ScriptScene />
    </div>
    
  )
}
