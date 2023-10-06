import Dropdown from 'react-bootstrap/Dropdown'
import { BsFilter } from 'react-icons/bs'
import { Trans, useTranslation } from 'react-i18next'

type Props = {
  className?: string;
}

export function DoodDropdownFilter({ className }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <Dropdown className={className}>
      <Dropdown.Toggle variant='info' size='sm'>
        <BsFilter className='py-0' /> {t('Show All')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header className='small'>
          <Trans i18nKey='dooddropdownfilter-title'>
            Filter elements by a<br/>minimum number of days
          </Trans>
        </Dropdown.Header>
        <Dropdown.Item active>{t('Show All')}</Dropdown.Item>
        <Dropdown.Item>{t('Work')}</Dropdown.Item>
        <Dropdown.Item>{t('Hold')}</Dropdown.Item>
        <Dropdown.Item>{t('Drop')}</Dropdown.Item>
        <Dropdown.Item>{t('Holiday')}</Dropdown.Item>
        <Dropdown.Item>{t('Travel')}</Dropdown.Item>
        <Dropdown.Item>{t('Rehearsal')}</Dropdown.Item>
        <Dropdown.Item>{t('Fitting')}</Dropdown.Item>
        <Dropdown.Item>{t('Photo')}</Dropdown.Item>
        <Dropdown.Item>{t('Start')}</Dropdown.Item>
        <Dropdown.Item>{t('Finish')}</Dropdown.Item>
        <Dropdown.Item>{t('Total')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
