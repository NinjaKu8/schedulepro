
import { useAppSelector } from 'store/hooks'
import { ScriptScenesPage } from './components'

type Props = {
  className?: string;
}

export function ScriptScenes({ className }: Props): JSX.Element {
  const scriptSceneIds = useAppSelector(state=>state.local.temp_scripts.scenesOrdered) as string[]
  return (
      <div className={`d-flex gap-5 flex-wrap justify-content-center py-5 px-4 overflow-scroll ${className}`}>
        {scriptSceneIds.map(scriptSceneId => (
          <ScriptScenesPage scriptSceneId={scriptSceneId} key={scriptSceneId} />
        ))}
      </div>
      
  )
}