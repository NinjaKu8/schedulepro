import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { useToggle } from 'hooks'
import { SubscriptionUpdate } from './SubscriptionUpdate'
import { SubscriptionCancel } from './SubscriptionCancel'

export function SubscriptionDropdown(): JSX.Element {
  const [ showUpdate, toggleUpdate ] = useToggle(false)
  const [ showCancel, toggleCancel ] = useToggle(false)
  const { t } = useTranslation()
  return (
    <>
      <Dropdown className='no-arrow'>
        <Dropdown.Toggle variant="white" id="dropdown-basic">
          <BsThreeDotsVertical />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={toggleUpdate}>{t('Update credit card...')}</Dropdown.Item>
          <Dropdown.Item>{t('Change to monthly')}</Dropdown.Item>
          <Dropdown.Item>{t('Turn off auto renew')}</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={toggleCancel}>{t('Cancel & Refund...')}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <SubscriptionUpdate show={showUpdate} toggle={toggleUpdate} />
      <SubscriptionCancel show={showCancel} toggle={toggleCancel} />
    </>
  )
}
