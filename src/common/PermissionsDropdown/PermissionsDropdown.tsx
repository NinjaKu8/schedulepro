import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

type Props = {
  className?: string;
  style?: React.CSSProperties;
  callback: (value: string) => void;
}

export const permissionsList = [
  'None',
  'Document',
  'View',
  'Edit',
  'Creator',
]

export function PermissionsDropdown({ className, style, callback }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleSelect = (eventKey: string | null): void => {
    if(eventKey) callback(eventKey)
  }

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle className={className} style={style} variant='light border border-2' size='sm'>{t('View')}</Dropdown.Toggle>
      <Dropdown.Menu>
        {permissionsList.map((permission, index)=>(
          <Dropdown.Item key={index} eventKey={permission}>{permission}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
