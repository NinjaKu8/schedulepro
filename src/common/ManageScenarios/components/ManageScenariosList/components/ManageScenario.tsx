
import { ManagerListColumn, ManagerListItem } from "common"
import { DNDItem } from "types/types"

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

type Scenario = {
  id: string;
  name: string;
  boards: string;
}
const scenarios: Scenario[] = [
  {id: '1', name: 'Script Order', boards: '2'},
  {id: '2', name: 'First Pass', boards: '3'},
  {id: '3', name: 'Locked Blue Draft', boards: '5'},
  {id: '4', name: 'Working Pink Draft', boards: '5'},
]

export function ManageScenario({ id, isSelected }: Props): JSX.Element {
  const board = scenarios.find(e=>e.id===id)
  return (
    <>
      {board &&
        <ManagerListItem className='bg-light' isSelected={isSelected}>
          <ManagerListColumn size='full'>{board.name}</ManagerListColumn>
          <ManagerListColumn size='md' className='text-center'>{board.boards}</ManagerListColumn>
        </ManagerListItem>
      }
    </>
  )
}
