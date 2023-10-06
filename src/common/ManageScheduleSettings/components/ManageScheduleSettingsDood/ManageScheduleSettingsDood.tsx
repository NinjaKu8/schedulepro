import { useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { ButtonAdd } from 'common'
import { useToggle } from 'hooks'
import { ManageScheduleSettingsRow } from "../index"

const scheduleSettings: { doodStart: string, doodWork: string, doodFinish: string, doodHold: string, doodDrop: string, doodPickup: string} = {
  doodStart: 'S',
  doodWork: 'W',
  doodFinish: 'F',
  doodHold: 'H',
  doodDrop: 'D',
  doodPickup: 'P',
}
const calendarEventTypes: { isHoliday: boolean, name: string, shortName: string}[] = [
  { isHoliday: true, name: 'Holiday', shortName: '/' },
  { isHoliday: false, name: 'Travel', shortName: 'T' },
  { isHoliday: false, name: 'Fitting', shortName: 'Ft' },
  { isHoliday: false, name: 'Rehearsal', shortName: 'R' },
  { isHoliday: false, name: 'Stills', shortName: 'Ph' },
]

export function ManageScheduleSettingsDood(): JSX.Element {
  const [ isEditing, toggleIsEditing ] = useToggle(false)
  const { t } = useTranslation()

  const handleClickButton = useCallback((): void => {
    toggleIsEditing()
  },[toggleIsEditing])

  const handleScheduleSettingsChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  const handleCalendarEventTypeChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  return (
    <div className='d-flex flex-column gap-3'>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <h4>Day Out of Days</h4>
        <div>
          <Button size='sm' variant='info' onClick={handleClickButton}>
            {isEditing ? 'Done' : 'Edit Names...'}
          </Button>
        </div>
      </div>

      <div className='d-flex flex-sm-row flex-column justify-content-center gap-2'>
        <div className='d-flex flex-column gap-2 mx-auto mx-sm-3'>
          {Object.entries(scheduleSettings).map(([key, value],i) => (
            <ManageScheduleSettingsRow key={i} label={t(key.slice(4))} value={value} callback={handleScheduleSettingsChange} />
          ))}
        </div>
        <div className='d-flex flex-column gap-2 mx-auto mx-sm-3'>
          {calendarEventTypes.map((event,i) => (
            <ManageScheduleSettingsRow key={i} label={t(event.name)} value={event.shortName} callback={handleCalendarEventTypeChange} isEditing={!event.isHoliday && isEditing} />
          ))}
          <div className='mx-auto'>
            <ButtonAdd callback={()=>console.log('add')} variant='success' />
          </div>
        </div>
      </div>
    </div>
  )
}