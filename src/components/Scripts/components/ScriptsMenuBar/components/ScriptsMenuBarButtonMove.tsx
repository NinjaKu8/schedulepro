import { useCallback } from 'react'

import { DropdownProjects } from 'common'

export function ScriptsMenuBarButtonMove(): JSX.Element {

  const handleChange = useCallback((e: string | null): void => {
    console.log('handleChange', e)
  },[])

  return (
    <DropdownProjects 
      size='sm' 
      variant='info' 
      toggleText='Move...' 
      callback={handleChange} 
    />
  )
}
