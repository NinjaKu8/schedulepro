import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

export function DoodDropdownCategory(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown>
      <Dropdown.Toggle variant='info' size='sm'>
        {t('Cast')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item active>{t("Cast")}</Dropdown.Item>
        <Dropdown.Item>{t('Background')}</Dropdown.Item>
        <Dropdown.Item>{t('Vehicles')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
