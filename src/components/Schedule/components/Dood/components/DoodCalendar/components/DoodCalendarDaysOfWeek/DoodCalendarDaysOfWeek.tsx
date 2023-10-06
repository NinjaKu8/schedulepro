import { useCallback } from 'react'

import { CalendarDaysOfWeek } from 'common'

export function DoodCalendarDaysOfWeek(): JSX.Element {

  const handleClick = useCallback((value: string): void => {
    console.log('click day of week', value)
  },[])

  return (
    <CalendarDaysOfWeek 
      callback={handleClick}
      className='rounded-1 flex-1 m-1 text-center pointer' 
    />
  )
}
