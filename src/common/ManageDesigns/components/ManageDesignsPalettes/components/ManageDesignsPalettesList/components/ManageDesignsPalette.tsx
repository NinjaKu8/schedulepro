
import { ManagerListColumn, ManagerListItem } from "common"
import { DNDItem } from "types/types"

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

type Palettes = {
  id: string;
  name: string;
  public: boolean;
}
const palettes: Palettes[] = [
  {id: '1', name: 'Default', public: true},
  {id: '2', name: 'Bright', public: true},
  {id: '3', name: 'Grayscale', public: true},
  {id: '4', name: 'MW Custom Palette', public: false},
]

export function ManageDesignsPalette({ id, isSelected }: Props): JSX.Element {
  const palette = palettes.find(e=>e.id===id)
  return (
    <>
      {palette &&
        <ManagerListItem className='bg-light' isSelected={isSelected}>
          <ManagerListColumn size='full'>{palette.name}</ManagerListColumn>
          <ManagerListColumn size='md' className='text-center'>{palette.public}</ManagerListColumn>
        </ManagerListItem>
      }
    </>
  )
}
