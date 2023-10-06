import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'

export function ProgressReportsButtonAdd(): JSX.Element {

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <Button size='sm' variant='success' onClick={handleClick}>
      Add
    </Button>
  )
}