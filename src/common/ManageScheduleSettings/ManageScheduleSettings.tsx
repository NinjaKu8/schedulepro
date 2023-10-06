
import { ManageScheduleSettingsDood, ManageScheduleSettingsDrop } from './components'



export function ManageScheduleSettings(): JSX.Element {
  return (
    <div className='d-flex flex-column gap-3'>
      <ManageScheduleSettingsDood />
      <hr />
      <ManageScheduleSettingsDrop />
    </div>
  )
}
