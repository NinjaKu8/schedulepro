
import { DropdownTC } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { getDropdownItemByEventKey } from 'helpers'

const paletteItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'Palette 1'},
  { eventKey: '2', value: 'Palette 2'},
  { eventKey: '3', value: 'Palette 3'},
  { eventKey: '4', value: 'Palette 4'},
]

const paletteLabelStyle = { width: '5em'}

export function ManageDesignsDesignsPalette(): JSX.Element {
  return (
    <div>
      <p className='lead mb-2'>Palette</p>
      <div className='mx-4'>
        <div className='d-flex gap-3 w-100'>
          <div style={paletteLabelStyle}>Palette</div>
          <DropdownTC
            className='d-flex flex-column w-100'
            callback={(e: string | null)=>{}}
            items={paletteItems}
            selectedItem={getDropdownItemByEventKey('1', paletteItems)} 
            size='sm' 
          />
        </div>
      </div>
    </div>
  )
}
