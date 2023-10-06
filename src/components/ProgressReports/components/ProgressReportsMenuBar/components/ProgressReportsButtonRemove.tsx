import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'

import { ButtonDelete } from "common"

export function ProgressReportsButtonRemove(): JSX.Element {

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <ButtonDelete callback={handleClick}>
      <Button size='sm' variant='danger'>
        Remove...
      </Button>
    </ButtonDelete>
  )
}