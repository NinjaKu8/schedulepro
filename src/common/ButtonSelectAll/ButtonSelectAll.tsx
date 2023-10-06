import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store/hooks'

type Props = {
  isSelectedAll?: boolean;
}

export function ButtonSelectAll({ isSelectedAll=false }: Props): JSX.Element | null {
  const isCardsSelect = useAppSelector(state=>state.local.isCardsSelect)
  const { t } = useTranslation()
  
  return (
    isCardsSelect
    ? <Button variant='outline-info' size='sm'>
        {!isSelectedAll
          ? t('Select All')
          : t('Unselect All')
        }
      </Button>
    : null
  )
}
