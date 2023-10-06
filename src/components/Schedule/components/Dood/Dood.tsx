
import { useAppSelector } from 'store/hooks'
import { DoodMenuBar, DoodGrid, DoodCalendar } from './components'

export function Dood(): JSX.Element {

  const dood_view = useAppSelector(state=>state.local.sch_dood_view)

  return (
    <>
      <DoodMenuBar />
      {dood_view==='0' && <DoodGrid /> }
      {dood_view==='1' && <DoodCalendar /> }
    </>
  )
}
