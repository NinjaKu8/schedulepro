import { useEffect, useLayoutEffect, DependencyList, EffectCallback } from 'react'

export const useIsomorphicLayoutEffect: (effect: EffectCallback, deps?: DependencyList | undefined) => void =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

