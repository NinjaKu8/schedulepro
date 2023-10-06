import { useCallback } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common'

type Props = {
  contactId: string;
  [x:string]: any;
}

export function InputContact({ contactId, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleNameChange = useCallback((): void => {
    console.log('name change', contactId)
  },[contactId])

  return (
    <InputGroup>
      <AutoInput type='email' size='sm' callback={handleNameChange} value='mw@michaelwilliams.com' {...rest} />
      <DropdownButton
        variant="outline-secondary"
        title="Work"
        id="input-group-dropdown-2"
        align="end"
        size='sm'
      >
        <Dropdown.Item href="#" active>{t('Work')}</Dropdown.Item>
        <Dropdown.Item href="#">{t('Home')}</Dropdown.Item>
        <Dropdown.Item href="#">{t('Mobile')}</Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  )
}
