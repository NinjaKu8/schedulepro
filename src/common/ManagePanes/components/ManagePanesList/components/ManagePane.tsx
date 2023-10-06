
import { ManagerListColumn, ManagerListItem } from "common"
import { DNDItem } from "types/types"

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

type Pane = {
  id: string;
  name: string;
  public: string;
}
const panes: Pane[] = [
  {id: '1', name: 'Default', public: 'Public' },
  {id: '2', name: 'Breakdown', public: 'Public' },
  {id: '3', name: 'Scheduling', public: 'Public' },
  {id: '4', name: 'Cross Boarding', public: 'Public' },
  {id: '5', name: 'Cast Avail', public: 'Public' },
]

export function ManagePane({ id, isSelected }: Props): JSX.Element {
  const pane = panes.find(e=>e.id===id)
  return (
    <>
      {pane &&
        <ManagerListItem className='bg-light' isSelected={isSelected}>
          <ManagerListColumn size='full'>{pane.name}</ManagerListColumn>
          <ManagerListColumn size='md' className='text-center'>{pane.public}</ManagerListColumn>
        </ManagerListItem>
      }
    </>
  )
}
