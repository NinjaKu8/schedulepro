import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

import { dropdownStyle } from 'globals/dropdownStyle'
import { Tip } from 'common'
import { ItemsWithIcon } from 'types/types'

type Props = {
  callback: (e: string|null) => void;
  disabled?: boolean;
  selectedCase: 'normal'|'uppercase'|'lowercase'|'titlecase';
  [x:string]: any;
}

const cases: ItemsWithIcon = {
  normal: { name: 'Normal', icon: 'Abc'},
  uppercase: { name: 'UPPERCASE', icon: 'ABC'},
  lowercase: { name: 'lowercase', icon: 'abc'},
  titlecase: { name: 'Title Case', icon: 'A Bc'},
}

export function FormatCase({ callback, disabled, selectedCase, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown onSelect={callback}>
      <Tip text={t('Text case')}>
        <Dropdown.Toggle disabled={disabled} size='sm' variant='light' {...rest}>
          {cases[selectedCase].icon}
        </Dropdown.Toggle>
      </Tip>
      <Dropdown.Menu style={dropdownStyle}>
        <Dropdown.Header>Text Case</Dropdown.Header>
        {Object.keys(cases).map(ca=>(
          <Dropdown.Item 
            active={ca===selectedCase}
            eventKey={ca}
            key={ca}
          >
            {cases[selectedCase].name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}