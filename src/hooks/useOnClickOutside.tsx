import { RefObject } from 'react'

import { useEventListener } from './index'

type Callback = (event: MouseEvent) => void
type MouseEventType = 'mousedown' | 'mouseup'

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(refs: RefObject<T>[], callback: Callback, mouseEvent: MouseEventType = 'mousedown'): void {

  useEventListener(mouseEvent, event => {
    // Do nothing if clicking one of ref elements or descendent elements
    if(refs.some(r=>r?.current?.contains(event.target as Node) ) ) return
    callback(event)
  })

}
