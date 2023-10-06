import { useParams } from 'react-router-dom'

import { useAppSelector } from 'store/hooks'
import { Navigation, ScriptScene, ScriptScenePanes, ScriptScenes } from 'common'
import { ScriptMenuBar } from './components'

export default function Script(): JSX.Element {
  const { id } = useParams()
  const scriptView = useAppSelector(state=>state.local.scriptView)
  console.log("🚀 ~ file: Script.tsx ~ line 7 ~ Script ~ id", id)
  return (
    <div className='d-flex flex-column h-100'>
      <Navigation>
        <ScriptMenuBar />
      </Navigation>
      {scriptView==='pane' && <ScriptScenePanes />}
      {scriptView==='scene' && <ScriptScene className='my-3 slide-down' />}
      {scriptView==='script' && <ScriptScenes className='slide-down' />}
    </div>
  )
}
