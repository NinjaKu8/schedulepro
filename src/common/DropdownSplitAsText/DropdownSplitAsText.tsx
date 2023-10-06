import { ReactNode } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { BsCaretDownFill } from 'react-icons/bs'

import { DropdownToggleCustom } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { useNavigate } from 'react-router-dom'

type DropdownSplitAsTextComponentProps = {
  callback: (e: string | null)=>void;
  children?: ReactNode;
  className?: string;
  headerText?: string;
  items: IDropdownTCItem[];
  path?: string;
  selectedItem: IDropdownTCItem | null;
  style?: React.CSSProperties;
}

export function DropdownSplitAsText({ callback, children, className, headerText, items, path, selectedItem, style }: DropdownSplitAsTextComponentProps): JSX.Element {
  const navigate = useNavigate()

  function handleClickLink(e: React.MouseEvent<HTMLElement>): void { 
    const path = e.currentTarget.dataset.value
    if(path) navigate(path)
  }

  return (
    <Dropdown as={ButtonGroup} align='end' className={`dropdown-split-as-text ${className}`} onSelect={callback} style={style}>
      <div onClick={handleClickLink} className='pointer me-1' data-value={path}>
        {children
          ? children
          : selectedItem?.value
        }
      </div>
      <Dropdown.Toggle as={DropdownToggleCustom} split>
        <BsCaretDownFill />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {headerText && <Dropdown.Header>{headerText}</Dropdown.Header>}
        {items.map(item=>(
          <Dropdown.Item 
            key={item.eventKey}
            active={selectedItem?.eventKey===item.eventKey}
            eventKey={item.eventKey}
          >
            {item.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
