import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { NavSimple, Filter, DropdownSchedules } from 'common'

export function ManageScenariosMenuBar(): JSX.Element {

  const handleMoveElements = useCallback((e: string | null): void => {
    console.log(e)
  },[])

  return (
    <NavSimple className='ps-3'>
      <Nav.Item><Button size='sm' variant='success'>New</Button></Nav.Item>
      <Nav.Item><Button size='sm' variant='info'>Merge</Button></Nav.Item>
      <Nav.Item><DropdownSchedules size='sm' variant='info' callback={handleMoveElements} toggleText='Move...' /></Nav.Item>
      <Nav.Item><Button size='sm' variant='danger'>Delete</Button></Nav.Item>
      <Nav.Item className='ms-auto'><Filter size='sm' /></Nav.Item>   
    </NavSimple>
  )
}
