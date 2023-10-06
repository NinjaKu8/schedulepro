
import { useAppSelector } from 'store/hooks'
import { NavSimple, ScriptMenuBarNavigation } from 'common'
import { ScriptMenuBarButtonRenumber, ScriptMenuBarToggleView } from './components'

export function ScriptMenuBar(): JSX.Element {
  const scriptView = useAppSelector(state=>state.local.scriptView)
  return (
    <NavSimple className='rounded-bottom'>
      {(scriptView==='scene'||scriptView==='pane') && <ScriptMenuBarNavigation />}
      {scriptView==='script' && <ScriptMenuBarButtonRenumber />}
      <div className='ms-sm-auto'>
        <ScriptMenuBarToggleView />
      </div>
    </NavSimple>
  )
}