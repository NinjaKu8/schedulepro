
import { DoodCell } from '../../../index'
import { useAppSelector } from 'store/hooks'

interface IDoodCount {
  id: number;
  count: number | null;
  isShootDay: boolean;
  isTotal: boolean;
}

const columns: IDoodCount[] = [  
  { id: 0, count: 4, isShootDay: true, isTotal: false },
  { id: 1, count: 5, isShootDay: true, isTotal: false },
  { id: 2, count: 7, isShootDay: true, isTotal: false },
  { id: 3, count: 10, isShootDay: true, isTotal: false },
  { id: 4, count: null, isShootDay: false, isTotal: false },
  { id: 5, count: null, isShootDay: false, isTotal: false },
  { id: 6, count: null, isShootDay: false, isTotal: false },
  { id: 7, count: null, isShootDay: false, isTotal: false },
  { id: 8, count: 12, isShootDay: true, isTotal: false },
  { id: 9, count: 15, isShootDay: true, isTotal: false },
  { id: 10, count: 11, isShootDay: true, isTotal: false },
  { id: 11, count: 17, isShootDay: true, isTotal: false },
  { id: 12, count: null, isShootDay: false, isTotal: false },
  { id: 13, count: null, isShootDay: false, isTotal: false },
  { id: 14, count: 15, isShootDay: true, isTotal: false },
  { id: 15, count: 14, isShootDay: true, isTotal: false },
  { id: 16, count: 16, isShootDay: true, isTotal: false },
  { id: 17, count: 17, isShootDay: true, isTotal: false },
  { id: 18, count: 13, isShootDay: true, isTotal: false },
  { id: 19, count: null, isShootDay: false, isTotal: false },
  { id: 20, count: null, isShootDay: false, isTotal: false },
  { id: 21, count: 14, isShootDay: true, isTotal: false },
  { id: 22, count: 17, isShootDay: true, isTotal: false },
  { id: 23, count: 14, isShootDay: true, isTotal: false },
  { id: 24, count: 14, isShootDay: true, isTotal: false },
  { id: 25, count: 17, isShootDay: true, isTotal: false },
  { id: 26, count: 56, isShootDay: false, isTotal: true },
  { id: 27, count: 45, isShootDay: false, isTotal: true },
  { id: 28, count: 57, isShootDay: false, isTotal: true },
  { id: 29, count: 1, isShootDay: false, isTotal: true },
  { id: 30, count: null, isShootDay: false, isTotal: true },
  { id: 31, count: null, isShootDay: false, isTotal: true },
  { id: 32, count: 543, isShootDay: false, isTotal: true },
]

export function DoodCount(): JSX.Element {
  const isShowDaysOff = useAppSelector(state=>state.local.sch_dood_isShow_daysoff)
  return (
    <div className='dood__count d-flex bg-gray-100'>
      <>
        <DoodCell isWide>Count</DoodCell>
        {columns.filter(c=>isShowDaysOff ? true : c.isShootDay!==null).map((column: IDoodCount)=>(
          <DoodCell key={column.id}>
            {column.count!==null ? column.count : '\u00a0'}
          </DoodCell>
        ))}
      </>
    </div>
  )
}
