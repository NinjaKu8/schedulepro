import { Panel, PanelGroup } from 'react-resizable-panels'

import ResizeHandle from './ResizeHandle'
import { ContentEditor } from './ContentEditor'

export function DesignStripEditor() {
  return (
    <PanelGroup direction="vertical">
      <>
        <Panel collapsible={false} minSize={18} order={1}>
          <ContentEditor />
        </Panel>
        <ResizeHandle />
      </>
      <Panel defaultSize={14} order={2}></Panel>
    </PanelGroup>
  )
}
