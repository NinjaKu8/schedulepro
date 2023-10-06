import { useCallback } from 'react'
import classnames from 'classnames'

type Props = {
  className?: string;
  callback?: (value: string)=>void;
}

const calendarDays = [
  {id: 0, name: 'Sun'},
  {id: 1, name: 'Mon'},
  {id: 2, name: 'Tue'},
  {id: 3, name: 'Wed'},
  {id: 4, name: 'Thu'},
  {id: 5, name: 'Fri'},
  {id: 6, name: 'Sat'}
]

export function CalendarDaysOfWeek({ className, callback }: Props): JSX.Element {

  const handleOnClick = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault()
    const value = e.currentTarget.dataset.value
    if(callback && value) callback(value)
  },[callback])

  return (
    <div className='d-flex justify-content-between'>
      {calendarDays.map(day=>(
        <div 
          key={day.id} 
          data-value={day.id}
          onClick={handleOnClick}
          className={classnames(
            [0,6].includes(day.id) ? 'bg-primary-75 text-light' : 'bg-light',
            className
          )}
        >
          {day.name}
        </div>
      ))}
    </div>
  )
}
