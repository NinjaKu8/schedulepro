import Container from 'react-bootstrap/Container'

import { ScheduleNewDescription, ScheduleNewName, ScheduleNewScripts } from './components'

export function ScheduleNew(): JSX.Element {
  return (
    <Container className='d-flex flex-column gap-3'>
      <ScheduleNewName />
      <ScheduleNewDescription />
      <ScheduleNewScripts />
    </Container>
  )
}
