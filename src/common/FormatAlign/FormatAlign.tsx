import { CgAlignTop, CgAlignMiddle, CgAlignBottom, CgAlignLeft, CgAlignCenter, CgAlignRight } from 'react-icons/cg'
import { useTranslation } from 'react-i18next'
import Dropdown from 'react-bootstrap/Dropdown'

import { dropdownStyle } from 'globals/dropdownStyle'
import { Tip } from 'common'
import { ItemsWithIcon } from 'types/types'

type Props = {
  callback: (e: string|null) => void;
  disabled?: boolean;
  selectedAlign: 'top'|'middle'|'bottom'|'left'|'center'|'right';
  [x:string]: any;
}

const aligns: ItemsWithIcon = {
  top: { name: 'Top', icon: <CgAlignTop />},
  middle: { name: 'Middle', icon: <CgAlignMiddle />},
  bottom: { name: 'Bottom', icon: <CgAlignBottom />},
  left: { name: 'Left', icon: <CgAlignLeft />},
  center: { name: 'Center', icon: <CgAlignCenter />},
  right: { name: 'Right', icon: <CgAlignRight />},
}

export function FormatAlign({ callback, disabled, selectedAlign, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown onSelect={callback}>
      <Tip text={t('Align boxes')}>
        <Dropdown.Toggle disabled={disabled} size='sm' variant='light' {...rest}>
          {aligns[selectedAlign].icon}
        </Dropdown.Toggle>
      </Tip>
      <Dropdown.Menu style={dropdownStyle}>
        <Dropdown.Header>Align Boxes</Dropdown.Header>
        {Object.keys(aligns).map(align=>(
          <Dropdown.Item 
            active={align===selectedAlign}
            eventKey={align}
            key={align}
          >
            <div className='d-flex gap-2'>
              <div>{aligns[selectedAlign].icon}</div>
              <div>{aligns[selectedAlign].name}</div>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}