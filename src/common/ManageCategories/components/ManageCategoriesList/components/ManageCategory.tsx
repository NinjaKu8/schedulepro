
import { ManagerListColumn, ManagerListItem } from "common"
import { DNDItem } from "types/types"

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

type Category = {
  id: string;
  name: string;
  elements: string;
}
const categories: Category[] = [
  {id: '1', name: 'Cast', elements: '73' },
  {id: '2', name: 'Background', elements: '25' },
  {id: '3', name: 'Stunts', elements: '7' },
  {id: '4', name: 'Vehicles', elements: '13' },
  {id: '5', name: 'Props', elements: '24' },
  {id: '6', name: 'SFX', elements: '4' },
  {id: '7', name: 'Wardrobe', elements: '7' },
  {id: '8', name: 'Makeup/Hair', elements: '4' },
  {id: '9', name: 'Animals', elements: '3' },
  {id: '10', name: 'Animal Handler', elements: '1' },
  {id: '11', name: 'Camera', elements: '3' },
  {id: '12', name: 'Grip/Electric', elements: '2' },
  {id: '13', name: 'Music', elements: '3' },
  {id: '14', name: 'Sound', elements: '' },
  {id: '15', name: 'Art Department', elements: '3' },
  {id: '16', name: 'Set Dressing', elements: '1' },
  {id: '17', name: 'Greenery', elements: '1' },
  {id: '18', name: 'Security', elements: '2' },
  {id: '19', name: 'Special Equipment', elements: '1' },
  {id: '20', name: 'Additional Labor', elements: '1' },
  {id: '21', name: 'VFX', elements: '' },
  {id: '22', name: 'MFX', elements: '' },
  {id: '23', name: 'Notes', elements: '' },
  {id: '24', name: 'Comments', elements: '' },
  {id: '25', name: 'Misc', elements: '' },
  {id: '26', name: 'Other', elements: '' },
  {id: '27', name: 'Set', elements: '83' },
  {id: '28', name: 'INT/EXT', elements: '5' },
  {id: '29', name: 'Day/Night', elements: '3' },
  {id: '30', name: 'Script Day', elements: '8' },
  {id: '31', name: 'Unit', elements: '2' },
  {id: '32', name: 'Sequence', elements: '6' },
  {id: '33', name: 'Location', elements: '27' },
]

export function ManageCategory({ id, isSelected }: Props): JSX.Element {
  const category = categories.find(e=>e.id===id)
  return (
    <>
      {category &&
        <ManagerListItem className='bg-light' isSelected={isSelected}>
          <ManagerListColumn size='full'>{category.name}</ManagerListColumn>
          <ManagerListColumn size='md' className='text-center'>{category.elements}</ManagerListColumn>
        </ManagerListItem>
      }
    </>
  )
}
