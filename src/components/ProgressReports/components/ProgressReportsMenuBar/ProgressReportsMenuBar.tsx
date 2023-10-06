import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

import { NavSimple } from 'common'
import { ProgressReportsDropdownSchedule, ProgressReportsDropdownBoardGroup, ProgressReportsButtonAdd, ProgressReportsButtonRemove, ProgressReportsButtonSelect, ProgressReportsButtonEdit } from './components'

export function ProgressReportsMenuBar(): JSX.Element {
  return (
    <NavSimple className='flex-wrap gap-1 px-3 pb-2 rounded-bottom' variant='pills'>
      <Nav.Item className='d-flex align-items-center gap-2 ms-2'>
        <Form.Label className='mb-0'>Schedule</Form.Label>
        <ProgressReportsDropdownSchedule />
      </Nav.Item>
      <Nav.Item className='d-flex align-items-center gap-2 ms-2'>
        <Form.Label className='mb-0'>Board Group</Form.Label>
        <ProgressReportsDropdownBoardGroup />
      </Nav.Item>
      <div className='vr mx-2' />
      <Nav.Item>
        <ProgressReportsButtonAdd/>
      </Nav.Item>
      <Nav.Item>
        <ProgressReportsButtonEdit />
      </Nav.Item>
      <Nav.Item>
        <ProgressReportsButtonRemove />
      </Nav.Item>
      <Nav.Item className='ms-sm-auto'>
        <ProgressReportsButtonSelect />
      </Nav.Item>
    </NavSimple>  
  )
}
