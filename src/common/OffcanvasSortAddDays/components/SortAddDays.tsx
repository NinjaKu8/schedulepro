import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Checkbox } from 'common'
import { useToggle } from 'hooks'
import { Sort, AddDays, CleanUp } from './components'


export function SortAddDays() {
  const [ sortDisabled, toggleSortDisabled ] = useToggle(false)
  const [ addDisabled, toggleAddDisabled ] = useToggle(true)
  const [ cleanupDisabled, toggleCleanupDisabled ] = useToggle(true)
  const { t } = useTranslation()

  const handleClickSortCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    toggleSortDisabled()
  },[toggleSortDisabled])

  const handleClickAddDaysCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    toggleAddDisabled()
  },[toggleAddDisabled])

  const handleClickCleanUpCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    toggleCleanupDisabled()
  },[toggleCleanupDisabled])

  return (
    <div className='d-flex flex-column gap-5'>
      <div className='d-flex flex-column gap-2'>
        <Checkbox checked={!sortDisabled} callback={handleClickSortCheckbox} size='lg' label={t('Sort')} />
        <Sort disabled={sortDisabled} />
      </div>
      <div className='d-flex flex-column gap-2'>
        <Checkbox checked={!addDisabled} callback={handleClickAddDaysCheckbox} size='lg' label={t('Add Day Breaks')} />
        <AddDays disabled={addDisabled} />
      </div>
      <div className='d-flex flex-column gap-2'>
        <Checkbox checked={!cleanupDisabled} callback={handleClickCleanUpCheckbox} size='lg' label={t('Clean Up')} />
        <CleanUp disabled={cleanupDisabled} />
      </div>
    </div>
  )
}
