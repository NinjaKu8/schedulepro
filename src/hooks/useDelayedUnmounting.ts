import { useState, useEffect } from 'react'

// used for delaying unmounting, useful for closing animations
export function useDelayedUnmounting(time: number = 1000): readonly[string,()=>void,()=>void] {
  const [state, setState] = useState('unmounted')

  function onMount() {
    if(state==='unmounting') return;
    setState('mounting')
  }
  function onUnmount() {
    if(state==='mounting') return;
    setState('unmounting')
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    if(state==='unmounting') {
      timeoutId = setTimeout(() => {
        setState('unmounted')
      }, time)
    } else if(state==='mounting') {
      timeoutId = setTimeout(() => {
        setState('mounted')
      }, time)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [state, time])

  return [state, onMount, onUnmount] as const
}