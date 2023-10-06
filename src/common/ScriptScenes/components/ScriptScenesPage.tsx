import { useCallback } from 'react'

import { ScriptSceneView } from 'common'
import { ScriptScenesNumber } from './index'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectBreakdownPagesByScriptSceneId, setScr_currentSceneId, setScriptView } from 'store/slices/local'
import { selectIsScriptScenesEditId } from 'store/slices/local'

type Props = {
  scriptSceneId: string;
}

const sceneContainerStyle = { height: '12em', width: '9em' }
const sceneContainerPagesStyle = { ...sceneContainerStyle, transform: 'translate(-.3em,.3em) rotate(-4deg)' }

export function ScriptScenesPage({ scriptSceneId }: Props): JSX.Element {
  const dispatch = useAppDispatch()
  const breakdownPages = useAppSelector(state=>selectBreakdownPagesByScriptSceneId(state,scriptSceneId))
  const isScriptScenesEditId = useAppSelector(state=>selectIsScriptScenesEditId(state,scriptSceneId))

  const handleClickScene = useCallback((): void => {
    if(!isScriptScenesEditId) {
      dispatch(setScr_currentSceneId(scriptSceneId))
      dispatch(setScriptView('scene'))
    }
  },[dispatch, isScriptScenesEditId, scriptSceneId])

  return (
    <div className='position-relative grow pointer'>

      {/* show page behind current page if the scene is longer than a page */}
      {breakdownPages>1 && <div className='position-absolute bg-white shadow top-0 left-0' style={sceneContainerPagesStyle} />}

      <div className='position-relative shadow bg-white pb-3' style={sceneContainerStyle}>
        <div className='script-scene-container overflow-hidden h-100'>
          <ScriptScenesNumber scriptSceneId={scriptSceneId} />
          <div className='script-scene user-select-none script-scene_thumbnail ps-3 pt-4' onMouseDown={handleClickScene}>
            <ScriptSceneView scriptSceneId={scriptSceneId} showSceneNumber={false} />
          </div>
        </div>
      </div>

    </div>
  )
}