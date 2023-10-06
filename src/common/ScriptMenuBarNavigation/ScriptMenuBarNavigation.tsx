
import { ScriptMenuBarNavigationInput, ScriptMenuBarNavigationPrevNext, ScriptMenuBarNavigationSlider } from './components'

export function ScriptMenuBarNavigation(): JSX.Element {
  return (
    <>
      <ScriptMenuBarNavigationInput />
      <ScriptMenuBarNavigationPrevNext direction='left' />
      <ScriptMenuBarNavigationPrevNext direction='right' />
      <ScriptMenuBarNavigationSlider />
    </>
  )
}