import { MdOutlineVerticalAlignTop, MdOutlineVerticalAlignCenter, MdOutlineVerticalAlignBottom } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import Dropdown from 'react-bootstrap/Dropdown'

import { dropdownStyle } from 'globals/dropdownStyle'
import { Tip } from 'common'
import { ItemsWithIcon } from 'types/types'

type Props = {
  callback: (e: string|null) => void;
  disabled?: boolean;
  selectedAlign: 'top'|'middle'|'bottom';
  [x:string]: any;
}

const verticalAligns: ItemsWithIcon = {
  top: { name: 'Top', icon: <MdOutlineVerticalAlignTop />},
  middle: { name: 'Middle', icon: <MdOutlineVerticalAlignCenter />},
  bottom: { name: 'Bottom', icon: <MdOutlineVerticalAlignBottom />},
}

export function FormatAlignVertical({ callback, disabled, selectedAlign, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown onSelect={callback}>
      <Tip text={t('Vertical text align')}>
        <Dropdown.Toggle disabled={disabled} size='sm' variant='light' {...rest}>
          {verticalAligns[selectedAlign].icon}
        </Dropdown.Toggle>
      </Tip>
      <Dropdown.Menu style={dropdownStyle}>
        <Dropdown.Header>Vertical Text Align</Dropdown.Header>
        {Object.keys(verticalAligns).map(align=>(
          <Dropdown.Item 
            active={align===selectedAlign}
            eventKey={align}
            key={align}
          >
            <div className='d-flex gap-2'>
              <div>{verticalAligns[selectedAlign].icon}</div>
              <div>{verticalAligns[selectedAlign].name}</div>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}