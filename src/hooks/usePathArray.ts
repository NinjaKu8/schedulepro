import { useLocation } from 'react-router-dom'

export const usePathArray = (): string[] => {
  const location = useLocation()
  const pathChunks = location.pathname.split('/')
  return pathChunks.slice(2)
}