
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { getDropdownItemByEventKey } from 'helpers'
import { dropdownStyle } from 'globals/dropdownStyle'

type Props = {
  callback: (value: string|null) => void;
  toggleText?: string;
  [x:string]: any;
}

const schedules: IDropdownTCItem[] = [
  { eventKey: 'ABC123', value: 'First Draft' },
  { eventKey: 'ABC124', value: 'Second Draft' },
  { eventKey: 'ABC125', value: 'Third Draft' },
]

export function DropdownSchedules({ callback, toggleText, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  const currentProjectId = 'ABC123'

  return (
    <Dropdown className='dropdown-split-as-text' onSelect={callback}>
      <Dropdown.Toggle {...rest}>
        {toggleText
          ? toggleText
          : getDropdownItemByEventKey(currentProjectId,schedules)?.value
        }
      </Dropdown.Toggle>
      <Dropdown.Menu style={dropdownStyle}>
        <Dropdown.Header>{t('Schedules')}</Dropdown.Header>
        {schedules.map(item=>(
          <Dropdown.Item 
            key={item.eventKey}
            active={currentProjectId===item.eventKey}
            eventKey={item.eventKey}
          >
            {item.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}