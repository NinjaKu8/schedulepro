import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'

import { AutoInput } from 'common'
import { BreakdownLabel } from '../index'

export function BreakdownFieldEighths(): JSX.Element {

  const handleUpdate = useCallback((value: string): void => {
    console.log('update', value)
  },[])

  return (
    <Form.Group id='breakdown-field-eighths' controlId='eighths'>
      <BreakdownLabel className='text-center'>1/8</BreakdownLabel>
      <AutoInput className='text-center' size='sm' value='' callback={handleUpdate} regex={/[0-7]/} type='text' inputMode='numeric' pattern='[0-9]' />
    </Form.Group>
  )
}
