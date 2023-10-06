import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

export function ManageElementsCategory(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div>
      <p className='lead mb-2'>{t('Change Category')}</p>
      <div className='px-4'>
        <Dropdown>
          <Dropdown.Toggle size='sm' id="dropdown-basic">
            Cast
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}
