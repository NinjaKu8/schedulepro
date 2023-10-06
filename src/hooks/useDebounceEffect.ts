import { useEffect, DependencyList } from 'react'

export function useDebounceEffect(fn: ()=>void, waitTime: number, deps?: DependencyList): void {
  useEffect(() => {
    const t = setTimeout(() => {
      if(deps!==undefined) fn.apply(undefined)
    }, waitTime)

    return () => {
      clearTimeout(t)
    }
    // eslint-disable-next-line
  }, deps)
}
