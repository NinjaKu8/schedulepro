
import { ManagerListColumn, ManagerListItem } from "common"
import { DNDItem } from "types/types"

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

type Calendar = {
  id: string;
  name: string;
  start: string;
}
const calendars: Calendar[] = [
  {id: '1', name: 'Start in January', start: '1/12/23' },
  {id: '2', name: 'Push to Jan 23', start: '1/23/23' },
  {id: '3', name: 'Shoot in Feb', start: '2/15/23' },
  {id: '4', name: 'Plan B', start: '3/17/23' },
]

export function ManageCalendar({ id, isSelected }: Props): JSX.Element {
  const calendar = calendars.find(e=>e.id===id)
  return (
    <>
      {calendar &&
        <ManagerListItem className='bg-light' isSelected={isSelected}>
          <ManagerListColumn size='full'>{calendar.name}</ManagerListColumn>
          <ManagerListColumn size='md' className='text-center'>{calendar.start}</ManagerListColumn>
        </ManagerListItem>
      }
    </>
  )
}
