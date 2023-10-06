
import { ScriptSceneEdit, ScriptSceneView } from 'common'
import { useAppSelector } from 'store/hooks'

type Props = {
  className?: string;
}

const sceneEditStyle = { maxWidth: '55em', transition: '.1s' } //width: 'clamp(55em, 55em, 55em)'

export function ScriptScene({ className }: Props): JSX.Element {
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  const scriptSceneId = useAppSelector(state=>state.local.scr_currentSceneId)
  const hasPermission = true

  return (
    <div 
      className={`flex-fil mx-auto h-100 w-100 overflow-hidden bg-white shadow border ${isScriptEdit ? 'border-primary' : 'border-white'} ${className}`} 
      style={sceneEditStyle}
    >
      <div className='script-scene-container d-flex flex-column h-100 overflow-hidden'>
        {hasPermission
          ? <ScriptSceneEdit scriptSceneId={scriptSceneId} disabled={isScriptEdit} />
          : <ScriptSceneView scriptSceneId={scriptSceneId} />
        }        
      </div>
    </div>
  )
}