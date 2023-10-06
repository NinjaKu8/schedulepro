
import { ManageScheduleSettingsLabel, ManageScheduleSettingsInput } from "./components"

type Props = { 
  isEditing?: boolean, 
  label: string, 
  value: string, 
  callback: (value: string)=>void 
}

export function ManageScheduleSettingsRow({ isEditing, label, value, callback }: Props): JSX.Element { 
  return (
    <div className='d-flex align-items-center'>
      <ManageScheduleSettingsLabel isEditing={isEditing} label={label} callback={callback} />
      <ManageScheduleSettingsInput isEditing={isEditing} value={value} callback={callback} />
    </div>
  )
}