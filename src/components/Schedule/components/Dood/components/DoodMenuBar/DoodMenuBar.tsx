import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'
import { NavSimple } from 'common'
import { DoodCheckboxColor, DoodCheckboxCount, DoodCheckboxDaysOff, DoodCheckboxGrid, DoodCheckboxSolo, DoodDateRange, DoodDropdownBoard, DoodDropdownCategory, DoodDropdownFilter, DoodDropdownShowTypes, DoodDropdownTotalsColumns, DoodDropdownView } from './components'

export function DoodMenuBar(): JSX.Element {
  const { t } = useTranslation()

  const dood_view = useAppSelector(state=>state.local.sch_dood_view)

  return (
    <NavSimple className='d-flex'>
      <div className='ms-2 text-muted'>{t('View')}:</div>
      <DoodDropdownView />
      <DoodDropdownBoard />
      <DoodDropdownCategory />

      {dood_view==='0' &&
        <>
          <div className='ms-3 text-muted'>{t('Dates')}:</div>
          <DoodDateRange />
          <div className='ms-3 text-muted'>{t('Show')}:</div>
          <DoodCheckboxSolo />
          <DoodCheckboxDaysOff />
          <DoodCheckboxCount />
          <DoodCheckboxColor />
          <DoodCheckboxGrid />
          <DoodDropdownFilter className='ms-auto' />
          <DoodDropdownTotalsColumns />
        </>
      }

      {dood_view==='1' &&
        <>
          <DoodDropdownShowTypes className='ms-auto' />
        </>
      }
      
    </NavSimple>
  )
}
