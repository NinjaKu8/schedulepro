import Form from 'react-bootstrap/Form'

import { AutoInput } from 'common'

const labelStyle = { width: '7em'}
const labelEditStyle = { width: '7.3em'}

export function ManageScheduleSettingsLabel({ isEditing, label, callback }: { isEditing?: boolean, label: string, callback: (value: string)=>void }): JSX.Element {
  return (
    isEditing
      ? <AutoInput className='me-1' callback={callback} value={label} size='sm' style={labelEditStyle} />
      : <Form.Label className='mb-0' style={labelStyle}>{label}</Form.Label>
  )
}