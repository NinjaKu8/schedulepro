import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

import { useIsMacintosh } from 'hooks'

type ItemProps = {
  hasEllipsis?: boolean;
  name: string;
  onClick?: ()=>void;
  shortcut?: string;
}

const dropdownItemStyle = { minWidth: '18em' }

export function FileMenuItem({ hasEllipsis, name, onClick, shortcut }: ItemProps): JSX.Element {
  const { isMac } = useIsMacintosh()
  const { t } = useTranslation()
  return (
    <Dropdown.Item onClick={onClick} style={dropdownItemStyle}>
      <div className='d-flex justify-content-between'>
        <div>{t(name)}{hasEllipsis && '...'}</div>
        {isMac && <div className='text-muted'>{shortcut}</div>}
      </div>
    </Dropdown.Item> 
  )
}
