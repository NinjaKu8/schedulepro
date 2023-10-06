import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

export function DoodDropdownTotalsColumns(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown>
      <Dropdown.Toggle variant='info' size='sm'>
        {t('Totals Columns')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item active>{t('Work')}</Dropdown.Item>
        <Dropdown.Item active>{t('Hold')}</Dropdown.Item>
        <Dropdown.Item>{t('Drop')}</Dropdown.Item>
        <Dropdown.Item active>{t('Holiday')}</Dropdown.Item>
        <Dropdown.Item active>{t('Travel')}</Dropdown.Item>
        <Dropdown.Item>{t('Rehearsal')}</Dropdown.Item>
        <Dropdown.Item>{t('Fitting')}</Dropdown.Item>
        <Dropdown.Item>{t('Photo')}</Dropdown.Item>
        <Dropdown.Item active>{t('Start')}</Dropdown.Item>
        <Dropdown.Item active>{t('Finish')}</Dropdown.Item>
        <Dropdown.Item active>{t('Total')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
