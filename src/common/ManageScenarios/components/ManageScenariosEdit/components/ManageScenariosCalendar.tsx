import { ReactNode } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

type CalendarInfoProps = {
  children?: ReactNode;
}
function CalendarInfo({ children }: CalendarInfoProps): JSX.Element {
  return (
    <div className='d-flex justify-content-between text-muted'>
      {children}
    </div>
  )
}

export function ManageScenariosCalendar(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <p className='lead mb-2'>{t('Calendar')}</p>
      <div>
        <Dropdown>
          <Dropdown.Toggle className='mb-2' size='sm'>Plan A Calendar</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Push til Feb</Dropdown.Item>
            <Dropdown.Item>Plan B</Dropdown.Item>
            <Dropdown.Item>Start March 15</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <CalendarInfo>
          <div>{t('Start')}</div>
          <div>Mon, January 23, 2023</div>
        </CalendarInfo>
        <CalendarInfo>
          <div>{t('Wrap')}</div>
          <div>Fri, March 13, 2023</div>
        </CalendarInfo>
        
      </div>
    </div>
    
  )
}
