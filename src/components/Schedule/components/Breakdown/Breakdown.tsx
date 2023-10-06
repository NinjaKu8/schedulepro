
import { BreakdownFieldScene, BreakdownFieldIe, BreakdownMenuBar, BreakdownFieldDn, BreakdownFieldPages, BreakdownFieldEighths, BreakdownFieldSet, BreakdownFieldDuration, BreakdownFieldDescription, BreakdownFieldScriptPage, BreakdownFieldScriptDay, BreakdownFieldUnit, BreakdownFieldLocation, BreakdownFieldComments, BreakdownFieldScriptScene } from './components'

export function Breakdown(): JSX.Element {
  return (
    <>
      <BreakdownMenuBar />
      <div className='breakdown p-2 overflow-auto'>
        <div className='breakdown-fields'> {/* child div required for container queries to work */}
          <BreakdownFieldScene />
          <BreakdownFieldIe />
          <BreakdownFieldDn />
          <BreakdownFieldPages />
          <BreakdownFieldEighths />
          <BreakdownFieldSet />
          <BreakdownFieldDuration />
          <BreakdownFieldDescription />
          <BreakdownFieldScriptPage />
          <BreakdownFieldScriptDay />
          <BreakdownFieldUnit />
          <BreakdownFieldLocation />
          <BreakdownFieldComments />
          <BreakdownFieldScriptScene />  
        </div>
      </div>
    </>
  )
}
