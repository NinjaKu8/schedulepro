import Dropdown from 'react-bootstrap/Dropdown'
import { AlignType } from 'react-bootstrap/esm/types'
import { useTranslation } from 'react-i18next'
import _ from 'lodash'

import { dropdownStyle } from 'globals/dropdownStyle'

export interface IDropdownTCItem {
  eventKey: string;
  value: string | JSX.Element;
  isDivider?: boolean;
}
export interface IDropdownTC {
  align?: AlignType | undefined;
  callback: (e: string | null)=>void;
  className?: string;
  items: IDropdownTCItem[];
  selectedItem: IDropdownTCItem | null;
  toggleClassName?: string;
  [x:string]: any;
}

export function DropdownTC({ align='start', callback, className, items, selectedItem, toggleClassName, ...rest }: IDropdownTC): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown align={align} className={className} onSelect={callback}>
      <Dropdown.Toggle className={toggleClassName} {...rest}>{selectedItem?.value ?? ''}</Dropdown.Toggle>
      <Dropdown.Menu style={dropdownStyle}>
        {items.map((item,i)=>(
          item.isDivider
            ? <Dropdown.Divider key={i} />
            : <Dropdown.Item
                active={selectedItem?.eventKey===item.eventKey}
                eventKey={item.eventKey}
                key={i}
              >
                {_.isString(item.value) ? t(item.value) : item.value}
              </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
