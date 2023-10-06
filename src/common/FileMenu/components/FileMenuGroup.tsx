import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import { IoIosArrowForward } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

import { IFileMenu } from '../FileMenu'
import { FileMenuItem } from './FileMenuItem'

type FileMenuGroupProps = {
  menuGroup: IFileMenu;
  submenu?: boolean | undefined;
  [x: string]: any;
}

const dropdownStyle = { fontSize: '.95em' }

export function FileMenuGroup({ menuGroup, submenu, ...rest }: FileMenuGroupProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown key={menuGroup.id} {...rest} >
      <Dropdown.Toggle as={Nav.Item} className='me-2 py-1 px-2 pointer' style={dropdownStyle}>
        <div className='d-flex justify-content-between'>
          <div>{t(menuGroup.name)}</div>
          {submenu && <div><IoIosArrowForward /></div>}
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {menuGroup.items.map(menuItem=>(
          menuItem.isDivider
            ? <Dropdown.Divider key={menuItem.id} />
            : menuItem?.items
              ? <FileMenuGroup 
                  className='ps-2 submenu'
                  drop='end'
                  key={menuItem.id}
                  menuGroup={{id: menuItem.id, name: menuItem.name, items: menuItem.items}} 
                  submenu
                />
              : <FileMenuItem
                  hasEllipsis={menuItem.hasEllipsis}
                  key={menuItem.id}
                  name={menuItem.name}
                  onClick={menuItem.onClick}
                  shortcut={menuItem.shortcut}
                />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
