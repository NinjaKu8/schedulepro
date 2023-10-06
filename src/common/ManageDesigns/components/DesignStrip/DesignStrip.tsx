import {
  DesignStripPreview,
  DesignStripMenuBar,
  DesignStripEditor,
  DesignStripFooter,
  DesignStripRuler,
} from './components'

export function DesignStrip(): JSX.Element {
  return (
    <div className="d-flex flex-column h-100">
      <div className="">
        <DesignStripMenuBar />
      </div>
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <DesignStripPreview />
        <DesignStripRuler>
          <DesignStripEditor key={1} />
        </DesignStripRuler>
      </div>
      <div className="">
        <DesignStripFooter />
      </div>
    </div>
  )
}
