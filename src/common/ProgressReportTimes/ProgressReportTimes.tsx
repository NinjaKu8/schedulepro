import { useCallback } from 'react'
import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'

import { ProgressReportsTimesRow, ProgressReportsTimesRowHeader } from './components'
import { ButtonAdd } from 'common/ButtonAdd'
import { useAppSelector } from 'store/hooks'

const labelsLeft = [
  'Start',
  'First Shot',
  'Meal Start',
  'Meal End',
  'First Shot',
  'Wrap'
]

export function ProgressReportTimes(): JSX.Element {
  const { t } = useTranslation()
  const isProgressReportEdit = useAppSelector(state=>state.local.isProgressReportEdit)

  const handleTextChange = useCallback((value: string): void => {
    console.log('handleTextChange', value)
  },[])

  const handleClickAdd = useCallback((): void => {
    console.log('handleClickAdd')
  },[])

  return (
    <Card className='shadow'>
      <Card.Body>
        <p>Report for <strong>It's A Wonderful Life</strong> on <strong>Friday, July 17, 2023</strong> for <strong>First Unit</strong></p>
        <div className='d-flex flex-column gap-2'>
          {isProgressReportEdit && <ProgressReportsTimesRowHeader />}
          {labelsLeft.map((label, i) => (
            <ProgressReportsTimesRow key={i} label={t(label)} value='' callback={handleTextChange} />
          ))}
          {isProgressReportEdit && <ButtonAdd className='ms-3' variant='success' callback={handleClickAdd} />}
          
        </div>
      </Card.Body>
    </Card>
  )
}