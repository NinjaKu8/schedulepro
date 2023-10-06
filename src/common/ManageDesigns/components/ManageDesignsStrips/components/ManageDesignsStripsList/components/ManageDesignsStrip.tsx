
import { ManagerListColumn, ManagerListItem } from "common"
import { DNDItem } from "types/types"

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

type Strips = {
  id: string;
  name: string;
  public: boolean;
}
const strips: Strips[] = [
  {id: '1', name: 'Thin', public: true},
  {id: '2', name: 'Medium', public: true},
  {id: '3', name: 'Thick', public: true},
  {id: '4', name: 'MW Custom Design', public: false},
]

export function ManageDesignsStrip({ id, isSelected }: Props): JSX.Element {
  const strip = strips.find(e=>e.id===id)
  return (
    <>
      {strip &&
        <ManagerListItem className='bg-light' isSelected={isSelected}>
          <ManagerListColumn size='full'>{strip.name}</ManagerListColumn>
          <ManagerListColumn size='md' className='text-center'>{strip.public}</ManagerListColumn>
        </ManagerListItem>
      }
    </>
  )
}
