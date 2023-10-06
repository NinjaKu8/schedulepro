import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { setSch_dood_show_types } from 'store/slices/local'
import Dropdown from 'react-bootstrap/Dropdown'

type Props = {
  className: string
}

const doodViews = [
  { id: 'isWork', name: 'Work' },
  { id: 'isHold', name: 'Hold' },
  { id: 'isStart', name: 'Start' },
  { id: 'isFinish', name: 'Finish' },
]

export function DoodDropdownShowTypes({ className }: Props): JSX.Element {
  const { t } = useTranslation()

  const sch_dood_show_types = useAppSelector(
    (state) => state.local.sch_dood_show_types
  )
  const dispatch = useAppDispatch()

  const handleClick = useCallback(
    (eventKey: string | null): void => {
      if (eventKey) {
        const newTypes =
          sch_dood_show_types.indexOf(eventKey) > -1
            ? sch_dood_show_types.filter((t) => t !== eventKey)
            : [...sch_dood_show_types, eventKey]
        dispatch(setSch_dood_show_types(newTypes))
      }
    },
    [dispatch, sch_dood_show_types]
  )

  return (
    <Dropdown autoClose="outside" onSelect={handleClick} className={className}>
      <Dropdown.Toggle variant="info" size="sm">
        Types
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {doodViews.map((view) => (
          <Dropdown.Item
            active={sch_dood_show_types.indexOf(view.id) > -1}
            eventKey={view.id}
            key={view.id}
          >
            {t(view.name)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
