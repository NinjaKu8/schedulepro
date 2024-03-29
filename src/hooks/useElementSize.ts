import { useCallback, useState } from 'react'

// See: https://usehooks-ts.com/react-hook/use-event-listener
import useEventListener from './useEventListener'
// See: https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

interface ISize {
  width: number
  height: number
}

export function useElementSize<T extends HTMLElement = HTMLDivElement>(): [(node: T|null)=>void, ISize] {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null)
  const [size, setSize] = useState<ISize>({
    width: 0,
    height: 0,
  })

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  useEventListener('resize', handleSize)

  useIsomorphicLayoutEffect(() => {
    handleSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  return [setRef, size]
}
