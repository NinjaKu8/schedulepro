import { useCallback, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'
import DatePicker from 'react-datepicker'

export function ManageScheduleRevisionDate(): JSX.Element {
  const { t } = useTranslation()
  const [date, setDate] = useState<Date|null>(new Date())

  const handleRevisionDateChange = useCallback((date: Date): void => {
    setDate(date)
  },[])

  return (
    <Form.Group>
      <Form.Label className='text-muted small'>{t('Revision Date')}</Form.Label>
      <div>
        <DatePicker
          customInput={<Form.Control className='mr-0 text-center' />}
          dateFormat='M/d/yy'
          disabledKeyboardNavigation
          onChange={handleRevisionDateChange}
          selected={date}
        />
      </div>
    </Form.Group>
  )
}
