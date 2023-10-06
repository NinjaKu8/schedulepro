import { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { AutoInput, ManageUsers } from 'common'

export function ManageProject(): JSX.Element {
  const { t } = useTranslation()

  const handleNameChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  const handleDescriptionChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  const handleSeasonChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  const handleScriptChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  const handleScheduleChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  const handleCategoryGroupChange = useCallback((value: string): void => {
    console.log(value)
  },[])

  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-muted small'>{t('Name')}</Form.Label>
        <AutoInput size='lg' callback={handleNameChange} value="It's a Wonderful Life" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-muted small'>{t('Description')}</Form.Label>
        <AutoInput callback={handleDescriptionChange} value='This is a description of this project' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-muted small'>{t('Season')}</Form.Label>
        <AutoInput callback={handleSeasonChange} value='Season 1' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className='d-flex mb-1'>
          <Form.Label className='text-muted small me-auto'>{t('Scripts')}</Form.Label>
          <Button variant='info' size='sm'>{t('Add Scripts')}</Button>
        </div>          
        <AutoInput as="textarea" callback={handleScriptChange} value='Script 1, Script 2' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className='d-flex mb-1'>
          <Form.Label className='text-muted small me-auto'>{t('Schedules')}</Form.Label>
          <Button variant='info' size='sm'>{t('Add Schedules')}</Button>
        </div>          
        <AutoInput as="textarea" callback={handleScheduleChange} value='Schedule 1, Schedule 2' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className='d-flex mb-1'>
          <Form.Label className='text-muted small me-auto'>{t('Category Groups')}</Form.Label>
          <Button variant='info' size='sm'>{t('Duplicate Category Group')}</Button>
        </div>          
        <AutoInput as="textarea" callback={handleCategoryGroupChange} value='Category Group 1, Category Group 2' />
      </Form.Group>

      <Form.Label className='text-muted small'>{t('Users')}</Form.Label>
      <ManageUsers />

    </>
  )
}
