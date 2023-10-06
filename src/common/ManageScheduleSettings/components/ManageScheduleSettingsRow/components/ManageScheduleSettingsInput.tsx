import { ImCancelCircle } from 'react-icons/im'

import { AutoInput, ButtonDelete } from 'common'

const inputStyle = { width: '5em'}

export function ManageScheduleSettingsInput({ isEditing, value, callback }: { isEditing?: boolean, value: string, callback: (value: string)=>void }): JSX.Element {
  return (
    <>
      <AutoInput callback={callback} value={value} className='text-center' size='sm' style={inputStyle} />
      {isEditing &&
        <ButtonDelete callback={()=>console.log('delete')}>
          <ImCancelCircle className='ms-2 text-danger' />
        </ButtonDelete>
      }
    </>
  )
}