import { useTranslation } from 'react-i18next'

import { NavSimple } from "common"

type Props = {
  count?: string | number;
}

export function ManagerListFooter({ count }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <NavSimple className='flex-shrink-0 mb-1'>
      <div className='d-flex gap-2 w-100 text-muted'>
        <div>{t('Total Items')}</div>
        <div>{count}</div>
      </div>
    </NavSimple>
  )
}
