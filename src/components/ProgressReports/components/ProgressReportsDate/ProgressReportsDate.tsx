import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Button from 'react-bootstrap/Button'

export function ProgressReportsDate(): JSX.Element {
  const { t } = useTranslation()

  const handleDateBack = useCallback((): void => {
    console.log('date back')
  },[])

  const handleDateForward = useCallback((): void => {
    console.log('date forward')
  },[])

  return (
    <h4 className='d-flex gap-2 align-items-center'>
      <Button onClick={handleDateBack} variant='white' className='p-0'><h4 className='p-0'><FiArrowLeft className='text-secondary' /></h4></Button>
      {t('Friday, July 17, 2023')}
      <Button onClick={handleDateForward} variant='white' className='p-0'><h4 className='p-0'><FiArrowRight className='text-secondary' /></h4></Button>
    </h4>
  )
}