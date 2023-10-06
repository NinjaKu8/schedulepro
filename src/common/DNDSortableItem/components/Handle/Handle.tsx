import { forwardRef } from 'react'
import { RxDragHandleDots1 } from 'react-icons/rx'

import { Action, ActionProps } from '../Action'

export const Handle = forwardRef<HTMLButtonElement, ActionProps>(
  (props, ref) => {
    return (
      <Action
        ref={ref}
        cursor="grab"
        data-cypress="draggable-handle"
        {...props}
      >
        <RxDragHandleDots1 className="fs-3" />
      </Action>
    )
  }
)
