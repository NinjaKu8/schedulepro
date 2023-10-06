import { useAppSelector } from 'store/hooks'
import { CardSelectable, CardScheduleVertical, CardScheduleHorizontal, CardList } from 'common'

const scheduleIds = ['ABC123','ABC124','ABC125','ABC126','ABC127','ABC128','ABC129','ABC130','ABC131','ABC132','ABC133']
const color = 'info'

export function SchedulesList(): JSX.Element {
  const isViewCard = useAppSelector(state=>state.local.isViewCard)

  return (
    <>
      <CardList isViewCard={isViewCard}>
        {scheduleIds.map(scheduleId=>(
          <CardSelectable key={scheduleId} color={color}>
            {isViewCard 
              ? <CardScheduleVertical scheduleId={scheduleId} color={color} />
              : <CardScheduleHorizontal scheduleId={scheduleId} color={color} />
            }
          </CardSelectable>
        ))}
      </CardList>
    </>
  )
}
