import { useCallback } from 'react'

import { Checkbox } from 'common'
import { useDispatchUpdateOffcanvasComponent } from 'hooks'
import { DoodCell } from '../../../../index'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setSch_dood_selectedElementIds } from 'store/slices/local'

type Props = {
  elementId: string;
}

const elements = [  
  { _id: '4', name: '1. GEORGE' },
  { _id: '5', name: '2. MARY' },
  { _id: '6', name: '3. GOWER' },
  { _id: '7', name: '4. BERT' },
  { _id: '8', name: '5. ERNIE' },
  { _id: '9', name: '6. MR. POTTER' },
  { _id: '10', name: '7. GEORGE' },
  { _id: '11', name: '8. MARY' },
  { _id: '12', name: '9. GOWER' },
  { _id: '13', name: '10. BERT' },
  { _id: '14', name: '11. ERNIE' },
  { _id: '15', name: '12. MR. POTTER' },
  { _id: '16', name: '13. GEORGE' },
  { _id: '17', name: '14. MARY' },
  { _id: '18', name: '15. GOWER' },
  { _id: '19', name: '16. BERT' },
  { _id: '20', name: '17. ERNIE' },
  { _id: '21', name: '18. MR. POTTER' },
  { _id: '22', name: '19. GEORGE' },
  { _id: '23', name: '20. MARY' },
  { _id: '24', name: '21. GOWER' },
  { _id: '25', name: '22. BERT' },
  { _id: '26', name: '23. ERNIE' },
  { _id: '27', name: '24. MR. POTTER' },
]

export function DoodElement({ elementId }: Props): JSX.Element {
  const toggleManageElements = useDispatchUpdateOffcanvasComponent('manageElements')
  const sch_dood_selectedElementIds = useAppSelector(state=>state.local.sch_dood_selectedElementIds)
  const dispatch = useAppDispatch()

  const handleClick = useCallback((): void => {
    const newArray = sch_dood_selectedElementIds.includes(elementId)
      ? sch_dood_selectedElementIds.filter(i=>i!==elementId)
      : [...sch_dood_selectedElementIds, elementId]
    dispatch(setSch_dood_selectedElementIds(newArray))
  },[dispatch, elementId, sch_dood_selectedElementIds])

  const element = elements.find(e=>e._id===elementId)
  return (
    <DoodCell isWide>
      <div className='d-flex gap-2'>
        <div>
          <Checkbox checked={sch_dood_selectedElementIds.includes(elementId)} callback={handleClick} />
        </div>
        <div className='flex-fill' onClick={toggleManageElements}>
          {element?.name}
        </div>
      </div>
    </DoodCell>
  )
}
