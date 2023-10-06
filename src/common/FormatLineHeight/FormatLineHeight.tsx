
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'
import { RxLineHeight } from 'react-icons/rx'

import { dropdownStyle } from 'globals/dropdownStyle'
import { Tip } from 'common'

type Props = {
  callback: (e: string|null) => void;
  disabled?: boolean;
  selectedSize: string;
  [x:string]: any;
}

const heights = ['1','1.15','1.5','2','2.15','2.5']

export function FormatLineHeight({ callback, disabled, selectedSize, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown onSelect={callback}>
      <Tip text={t('Line height')}>
        <Dropdown.Toggle variant='light' size='sm' disabled={disabled} {...rest}>
          <RxLineHeight />
        </Dropdown.Toggle>
      </Tip>
      <Dropdown.Menu style={dropdownStyle}>
        <Dropdown.Header>Line Height</Dropdown.Header>
        {heights.map(height=>(
          <Dropdown.Item 
            active={height===selectedSize}
            eventKey={height}
            key={height}
          >
            {height}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}