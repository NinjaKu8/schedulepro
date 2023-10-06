
import { DoodRow } from './components'
import { useAppSelector } from 'store/hooks'

const elementIds = ['4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27']

export function DoodRows(): JSX.Element {
  const isShowSolo = useAppSelector(state=>state.local.sch_dood_isShow_solo)
  const sch_dood_selectedElementIds = useAppSelector(state=>state.local.sch_dood_selectedElementIds)
  return (
    <div style={{zIndex: 1}}>
      {elementIds.filter(e=>isShowSolo ? sch_dood_selectedElementIds.includes(e) : true).map(elementId=>(
        <DoodRow key={elementId} elementId={elementId} />
      ))}
    </div>
  )
}
