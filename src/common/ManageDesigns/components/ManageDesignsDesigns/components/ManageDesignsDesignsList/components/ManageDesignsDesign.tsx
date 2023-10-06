
import { ManagerListColumn, ManagerListItem } from "common"
import { DNDItem } from "types/types"

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

type Designs = {
  id: string;
  name: string;
  public: boolean;
}
const designs: Designs[] = [
  {id: '1', name: 'Thin', public: true},
  {id: '2', name: 'Medium', public: true},
  {id: '3', name: 'Thick', public: true},
  {id: '4', name: 'MW Custom Design', public: false},
]

export function ManageDesignsDesign({ id, isSelected }: Props): JSX.Element {
  const design = designs.find(e=>e.id===id)
  return (
    <>
      {design &&
        <ManagerListItem className='bg-light' isSelected={isSelected}>
          <ManagerListColumn size='full'>{design.name}</ManagerListColumn>
          <ManagerListColumn size='md' className='text-center'>{design.public}</ManagerListColumn>
        </ManagerListItem>
      }
    </>
  )
}
