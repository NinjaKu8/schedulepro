import { HiLockClosed, HiOutlineLockOpen } from 'react-icons/hi'

import { ManagerListColumn, ManagerListItem } from "common"
import { DNDItem } from "types/types"

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

type Element = {
  id: string;
  isLocked: boolean;
  name: string;
  breakdowns: string;
}
const elements: Element[] = [
  {id: '1', isLocked: true, name: 'GEORGE', breakdowns: '212'},
  {id: '2', isLocked: false, name: 'MARY', breakdowns: '65'},
  {id: '3', isLocked: true, name: 'POTTER', breakdowns: '34'},
  {id: '4', isLocked: false, name: 'UNCLE BILLY', breakdowns: '22'},
  {id: '5', isLocked: false, name: 'CLARENCE', breakdowns: '54'},
  {id: '6', isLocked: false, name: 'VIOLET', breakdowns: '7'},
  {id: '7', isLocked: false, name: 'BERT', breakdowns: '8'},
  {id: '8', isLocked: true, name: 'ERNIE', breakdowns: '4'},
  {id: '9', isLocked: false, name: 'COUSIN TILLY', breakdowns: '3'},
  {id: '10', isLocked: false, name: 'COUSIN EUSTICE IS AN EXTREMELY LONG NAME INDEED', breakdowns: '3'},
  {id: '11', isLocked: false, name: 'GOWER', breakdowns: '5'},
  {id: '12', isLocked: false, name: 'HARRY', breakdowns: '7'},
  {id: '13', isLocked: false, name: 'MARTINI', breakdowns: '9'},
  {id: '14', isLocked: false, name: 'SAM', breakdowns: '3'},
  {id: '15', isLocked: false, name: 'PETE', breakdowns: '5'},
  {id: '16', isLocked: false, name: 'JANIE', breakdowns: '4'},
  {id: '17', isLocked: false, name: 'TOMMY', breakdowns: '4'},
  {id: '18', isLocked: false, name: 'ZUZU', breakdowns: '2'},
  {id: '19', isLocked: false, name: 'GEORGE', breakdowns: '212'},
  {id: '20', isLocked: false, name: 'MARY', breakdowns: '65'},
  {id: '21', isLocked: false, name: 'POTTER', breakdowns: '34'},
  {id: '22', isLocked: false, name: 'UNCLE BILLY', breakdowns: '22'},
  {id: '23', isLocked: false, name: 'CLARENCE', breakdowns: '54'},
  {id: '24', isLocked: false, name: 'VIOLET', breakdowns: '7'},
  {id: '25', isLocked: false, name: 'BERT', breakdowns: '8'},
  {id: '26', isLocked: false, name: 'ERNIE', breakdowns: '4'},
  {id: '27', isLocked: false, name: 'COUSIN TILLY', breakdowns: '3'},
  {id: '28', isLocked: false, name: 'COUSIN EUSTICE', breakdowns: '3'},
  {id: '29', isLocked: false, name: 'GOWER', breakdowns: '5'},
  {id: '30', isLocked: false, name: 'HARRY', breakdowns: '7'},
  {id: '31', isLocked: false, name: 'MARTINI', breakdowns: '9'},
  {id: '32', isLocked: false, name: 'SAM', breakdowns: '3'},
  {id: '33', isLocked: false, name: 'PETE', breakdowns: '5'},
  {id: '34', isLocked: false, name: 'JANIE', breakdowns: '4'},
  {id: '35', isLocked: false, name: 'TOMMY', breakdowns: '4'},
  {id: '36', isLocked: false, name: 'ZUZU', breakdowns: '2'},
]

export function ManageElement({ id, isSelected }: Props): JSX.Element {
  const element = elements.find(e=>e.id===id)
  return (
    <>
      {element &&
        <ManagerListItem className='bg-light' isSelected={isSelected}>
          <ManagerListColumn size='sm'>{element.isLocked ? <HiLockClosed /> : <HiOutlineLockOpen />}</ManagerListColumn>
          <ManagerListColumn size='sm'>{element.id}</ManagerListColumn>
          <ManagerListColumn size='full'>{element.name}</ManagerListColumn>
          <ManagerListColumn size='md' className='text-center'>{element.breakdowns}</ManagerListColumn>
        </ManagerListItem>
      }
    </>
  )
}
