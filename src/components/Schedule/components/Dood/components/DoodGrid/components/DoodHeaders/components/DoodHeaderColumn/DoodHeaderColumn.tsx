import classnames from "classnames";
import { DNDItem } from "types/types";
import { DoodCell } from "../../../DoodCell"

type Props = {
  id: DNDItem;
  isSelected: boolean;
}

interface IDoodHeader {
  id: string,
  date: Date;
  shootDay: number|null;
}

const columns: IDoodHeader[] = [  
  { id: '0', date: new Date(2023,2,13), shootDay: 1 },
  { id: '1', date: new Date(2023,2,14), shootDay: 2 },
  { id: '2', date: new Date(2023,2,15), shootDay: 3 },
  { id: '3', date: new Date(2023,2,16), shootDay: 4 },
  { id: '4', date: new Date(2023,2,17), shootDay: null },
  { id: '5', date: new Date(2023,2,18), shootDay: null },
  { id: '6', date: new Date(2023,2,19), shootDay: null },
  { id: '7', date: new Date(2023,2,20), shootDay: null },
  { id: '8', date: new Date(2023,2,21), shootDay: 5 },
  { id: '9', date: new Date(2023,2,22), shootDay: 6 },
  { id: '10', date: new Date(2023,2,23), shootDay: 7 },
  { id: '11', date: new Date(2023,2,24), shootDay: 8 },
  { id: '12', date: new Date(2023,2,25), shootDay: null },
  { id: '13', date: new Date(2023,2,26), shootDay: null },
  { id: '14', date: new Date(2023,2,27), shootDay: 9 },
  { id: '15', date: new Date(2023,2,28), shootDay: 10 },
  { id: '16', date: new Date(2023,2,29), shootDay: 11 },
  { id: '17', date: new Date(2023,3,30), shootDay: 12 },
  { id: '18', date: new Date(2023,3,31), shootDay: 13 },
  { id: '19', date: new Date(2023,3,1), shootDay: null },
  { id: '20', date: new Date(2023,3,2), shootDay: null },
  { id: '21', date: new Date(2023,3,3), shootDay: 14 },
  { id: '22', date: new Date(2023,3,4), shootDay: 15 },
  { id: '23', date: new Date(2023,3,5), shootDay: 16 },
  { id: '24', date: new Date(2023,3,6), shootDay: 17 },
  { id: '25', date: new Date(2023,3,7), shootDay: 18 },
]
const headerRows = ['Date','Day','Shoot Day']
const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export function DoodHeaderColumn({ id, isSelected }: Props): JSX.Element {
  const column = columns.find(c=>c.id===id)
  return (
    <>
      {column &&
        <div className={classnames('dood__header--column d-flex flex-column pointer', isSelected && 'dood__header--selected')}>
          {headerRows.map(row=>{
            const value = row === 'Date'
              ? column?.date.toLocaleDateString().slice(0,-5)
              : row === 'Day'
                ? daysOfWeek[column.date.getDay()].slice(0,3)
                : column?.shootDay ?? '\u00a0'
            return (
              <DoodCell key={`${row}-${column.id}`}>
                {value}
              </DoodCell>
            )
          })}
        </div>
      }
    </>
  )
}
