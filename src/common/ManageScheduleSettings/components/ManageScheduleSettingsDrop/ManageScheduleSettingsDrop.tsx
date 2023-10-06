
import { AutoInput } from 'common'

const inputStyle = { width: '5em'}

export function ManageScheduleSettingsDrop(): JSX.Element {
  return (
    <div className='d-flex flex-column gap-3'>
      <h4>Drop Pickup</h4>
      <div className='d-flex flex-sm-row flex-column justify-content-center align-items-center gap-2'>
        <p className='mb-0'>Number of days between drop and pickup</p>
        <AutoInput callback={()=>console.log('change')} className='text-center' value='10' size='sm' variant='info' style={inputStyle} />
      </div>
    </div>
  )
}