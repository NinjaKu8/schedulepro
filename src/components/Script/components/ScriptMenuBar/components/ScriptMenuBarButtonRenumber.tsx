
import { DropdownRenumber } from 'common'
import { useAppSelector } from 'store/hooks'
import { useCallback } from 'react'

export function ScriptMenuBarButtonRenumber(): JSX.Element {
  const isScriptEdit = useAppSelector(state=>state.local.isScriptEdit)
  
  const handleRenumber = useCallback((): void => {
    console.log('renumber')
  },[])

  return (
    <DropdownRenumber disabled={isScriptEdit} callback={handleRenumber} />
  )
}