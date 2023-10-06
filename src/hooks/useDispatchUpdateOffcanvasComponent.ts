import { updateOffcanvasComponent } from 'store/slices/local'
import { useAppDispatch } from 'store/hooks'

export function useDispatchUpdateOffcanvasComponent(name: string): ()=>void {
  const dispatch = useAppDispatch()
  function offcanvasComponent() { dispatch(updateOffcanvasComponent(name)) }

  return offcanvasComponent
}