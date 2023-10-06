import { NavSimple } from 'common'
import { DesignStripButtonCoordinates, DesignStripButtonHeight, DesignStripButtonShowPreview, DesignStripButtonUnits, DesignStripButtonZoom } from './components'

export function DesignStripFooter(): JSX.Element {
  return (
    <>
      <NavSimple className='ps-3'>
        <DesignStripButtonShowPreview />
        <DesignStripButtonZoom />
        <DesignStripButtonHeight />
        <DesignStripButtonCoordinates />
        <DesignStripButtonUnits />
      </NavSimple>
    </>
  )
}