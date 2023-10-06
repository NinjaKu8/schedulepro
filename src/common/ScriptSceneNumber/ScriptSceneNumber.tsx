import { useCallback } from 'react'

import { AutoInput } from 'common/AutoInput'
import { useAppSelector } from 'store/hooks'

type Props = {
  className?: string;
  side: 'left' | 'right';
  value: string;
}

export function ScriptSceneNumber({ className, side, value }: Props): JSX.Element {
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)

  const handleTextChange = useCallback((value: string): void => {
    console.log('handleTextChange', value)
  },[])

  return (
    <div className='scene-number'>
      <div className={`scene-number_${side}`}>
        {isScriptEdit
          ? <div className={`scene-number_${side}_input`}>
              <AutoInput 
                autoFocus
                callback={handleTextChange} 
                className={`p-0 m-0 border border-primary ${className}`} 
                selectOnFocus
                value={value} 
              />
            </div> 
          : <div className={`scene-number_${side}_text text-break ${className}`}>
              {value}
            </div>
        }
      </div>
    </div>
  )
}