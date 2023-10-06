import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

export function DoodDropdownBoard(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown>
      <Dropdown.Toggle variant='info' size='sm'>
        {t('Board 1')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item active>{t('First Draft')}</Dropdown.Item>
        <Dropdown.Item>{t('Locked White')}</Dropdown.Item>
        <Dropdown.Item>{t('Rev Blue')}</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>{t('Combined Boards')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
