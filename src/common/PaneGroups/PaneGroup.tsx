import { Dispatch, SetStateAction, useCallback } from 'react'
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'

import { Pane } from './Pane'
import { paneIsGroup, paneCreateReflex } from 'helpers'
import { ITabPane, IPaneGroup } from 'types/panes'

type Props = {
  window: IPaneGroup;
  setStructure: Dispatch<SetStateAction<ITabPane | IPaneGroup>>;
}

export function PaneGroup({ window, setStructure }: Props): JSX.Element {

  const handleOnResize = useCallback((event: any): void => {
    // const { name, flex } = event.component.props
  },[])

  return (
    <ReflexContainer orientation={window.isVertical ? 'horizontal' : 'vertical'}>
      {paneCreateReflex(window).map((window: any, index: any) => {
        if(window==='SPLIT')
          return <ReflexSplitter key={index} />
        if(!paneIsGroup(window)) {
          return (
            !!window.tabs.length && (
              <ReflexElement
                flex={window.flex}
                key={window.id}
                propagateDimensionsRate={200}
                propagateDimensions={true}
                onResize={handleOnResize}
                name={window.id}
              >
                <Pane tabPane={window} index={index} />
              </ReflexElement>
            )
          )
        } else {
          return (
            <ReflexElement key={window.id}>
              <PaneGroup window={window} setStructure={setStructure} />
            </ReflexElement>
          )
        }
      })}
    </ReflexContainer>
  )
}
