
import { InputElement, NavSimple } from 'common'
import { ElementsButtonCategories, ElementsButtonElements } from './components'

const addRemoveStyle = { width: '30em'}

export function ElementsMenuBar(): JSX.Element {
  return (
    <NavSimple>
      <div className='d-flex gap-1 flex-wrap'>
        <ElementsButtonCategories />
        <ElementsButtonElements />
      </div>
      <div className='d-flex gap-1 flex-wrap ms-auto'>
        <InputElement style={addRemoveStyle} />
      </div>
    </NavSimple>
  )
}
