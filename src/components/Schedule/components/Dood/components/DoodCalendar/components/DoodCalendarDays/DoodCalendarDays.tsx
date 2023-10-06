import { useEffect } from 'react'
import _ from 'lodash'

import { useAppDispatch } from 'store/hooks'
import { setTemp_doodcalendar } from 'store/slices/local'
import { useCalendarMonth } from 'hooks'
import { DoodCalendarData, DNDDroppable, DNDSortable } from 'common'
import { DoodCalendarDay } from '../index'
import { IDNDData, DNDItems } from 'types/types'
import { dateDayOfWeek } from 'helpers'

type Props = {
  containerId: string;
  month: string;
}

export function DoodCalendarDays({ containerId, month }: Props): JSX.Element {

  // update the dnd array when the month changes
  const dispatch = useAppDispatch()
  const weeks = useCalendarMonth(month)
  
  useEffect(()=>{
    if(weeks && containerId) {
      const days: DNDItems = {[containerId]: _.flatten(weeks).map(day=>day.date)}
      dispatch(setTemp_doodcalendar(days))
    }
  },[month, containerId, dispatch, weeks])

  return (
    <DoodCalendarData containerId={containerId}>
      {({ isSelected, isSortingContainer, filteredItems, onSelect }: IDNDData)=>(
        <DNDDroppable id={containerId} strategy='grid' items={filteredItems}>

          <div className='d-flex flex-wrap'>
            {filteredItems.map(item=>(
              <DNDSortable 
                containerId={containerId} 
                className='d-flex flex-wrap calendar-day'
                disabled={isSortingContainer} 
                handle={false} 
                id={item} 
                key={item} 
                onSelect={onSelect}
              >
                <DoodCalendarDay 
                  date={item as string}
                  dayOfWeek={dateDayOfWeek(item as string)}
                  disabled={false}
                  isSelected={isSelected(item)}
                />
              </DNDSortable>
            ))}
          </div>

        </DNDDroppable>
      )}
    </DoodCalendarData>
  )
}
