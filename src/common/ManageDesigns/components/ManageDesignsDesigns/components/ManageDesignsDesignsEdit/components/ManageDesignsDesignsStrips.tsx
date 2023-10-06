import { DropdownTC } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { getDropdownItemByEventKey } from 'helpers'


type StripChooserProps = {
  id?: string;
  name: string;
  items: IDropdownTCItem[];
}

const stripItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'Medium Strip'},
  { eventKey: '2', value: 'Thin Strip'},
  { eventKey: '3', value: 'Thick Strip'},
]
const bannerItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'Medium Banner'},
  { eventKey: '2', value: 'Thin Banner'},
  { eventKey: '3', value: 'Thick Banner'},
]
const dayItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'Medium Day'},
  { eventKey: '2', value: 'Thin Day'},
  { eventKey: '3', value: 'Thick Day'},
]
const stripChoosers: StripChooserProps[] = [
  { id: '1', name: 'Strip', items: stripItems},
  { id: '2', name: 'Banner', items: bannerItems},
  { id: '3', name: 'Day', items: dayItems},
]

const stripLabelStyle = { width: '5em'}

function StripChooser({ name, items }: StripChooserProps): JSX.Element {
  return (
    <div className='d-flex gap-3 w-100'>
      <div style={stripLabelStyle}>{name}</div>
      <DropdownTC
        className='d-flex flex-column w-100'
        callback={(e: string | null)=>{}}
        items={items}
        selectedItem={getDropdownItemByEventKey('1', items)} 
        size='sm' 
      />
    </div>
  )
}

export function ManageDesignsDesignsStrips(): JSX.Element {
  return (
    <div>
      <p className='lead mb-2'>Strips</p>
      <div className='d-flex gap-3 flex-column mx-4'>
        {stripChoosers.map(stripChooser=>(
          <StripChooser key={stripChooser.id} name={stripChooser.name} items={stripChooser.items} />
        ))}
      </div>
    </div>
  )
}
