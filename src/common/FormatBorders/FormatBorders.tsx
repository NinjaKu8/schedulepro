import { BsBorderOuter, BsBorderLeft, BsBorderTop, BsBorderRight, BsBorderBottom } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import Dropdown from 'react-bootstrap/Dropdown'

import { dropdownStyle } from 'globals/dropdownStyle'
import { Tip } from 'common'

type Props = {
  callback: (e: string|null) => void;
  disabled?: boolean;
  selectedBorders: string[];
  [x:string]: any;
}

const borders = [
  {id: 'all', name: 'All', icon: <BsBorderOuter />},
  {id: 'left', name: 'Left', icon: <BsBorderLeft />},
  {id: 'top', name: 'Top', icon: <BsBorderTop />},
  {id: 'right', name: 'Right', icon: <BsBorderRight />},
  {id: 'bottom', name: 'Bottom', icon: <BsBorderBottom />},
]

export function FormatBorders({ callback, disabled, selectedBorders, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  const firstBorder = borders.find(border=>selectedBorders.includes(border.id))
  return (
    <Dropdown onSelect={callback}>
      <Tip text={t('Box borders')}>
        <Dropdown.Toggle disabled={disabled} size='sm' variant='light' {...rest}>
          {firstBorder?.icon ?? borders[0].icon}
        </Dropdown.Toggle>
      </Tip>
      <Dropdown.Menu style={dropdownStyle}>
        <Dropdown.Header>Borders</Dropdown.Header>
        {borders.map(border=>(
          <Dropdown.Item 
            active={selectedBorders.includes(border.id)}
            eventKey={border.id}
            key={border.id}
          >
            <div className='d-flex gap-2'>
              <div>{border.icon}</div>
              <div>{border.name}</div>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}