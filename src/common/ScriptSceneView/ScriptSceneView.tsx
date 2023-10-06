import { Fragment } from 'react'

import { ScriptSceneNumber } from 'common'
import { useAppSelector } from 'store/hooks'
import { selectScriptSceneByIdContent, selectBreakdownSceneByScriptSceneId } from 'store/slices/local'
import { IScriptSceneContent, IScriptSceneContentText } from 'types/script'

type Props = {
  scriptSceneId: string;
  showSceneNumber?: boolean;
}

export function ScriptSceneView({ scriptSceneId, showSceneNumber=true }: Props): JSX.Element {
  const sceneNumber = useAppSelector(state=>selectBreakdownSceneByScriptSceneId(state,scriptSceneId))
  const currentScriptSceneContent: IScriptSceneContent[] = useAppSelector(state=>selectScriptSceneByIdContent(state,scriptSceneId))

  return (
    <div className='script-scene position-relative overflow-auto'>
      {showSceneNumber && 
        <>
          <ScriptSceneNumber value={sceneNumber ?? ''} side='left' />
          <ScriptSceneNumber value={sceneNumber ?? ''} side='right' />
        </>
      }
      {currentScriptSceneContent.map((paragraph: IScriptSceneContent, i: number) => {
        return (
          <p className={paragraph.type} key={i}>
            {paragraph.content.map((content: IScriptSceneContentText, i: number) => {
              return (
                <Fragment key={i}>
                  {content?.marks
                    ? <span className={content.marks?.join(' ')}>{content.text}</span>
                    : content.text
                  }
                </Fragment>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}
