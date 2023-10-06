import { useTranslation } from 'react-i18next'

import { AutoInputSelectSansOverlay } from 'common'
import { IListSelectItem } from 'common/ListSelect/ListSelect'
import { InputElementTagLabel } from './index'

type Props = {
  callback: (id: string|null, value?: string) => void;
  elementName: string;
}

const elements: IListSelectItem[] = [
  { _id: '26', name: '1. GEORGE', selected: false },
  { _id: '27', name: '2. MARY', selected: false },
  { _id: '28', name: '5. MR. POTTER', selected: false },
  { _id: '29', name: '5 ND Pedestrians have a very long name indeed', selected: false },
  { _id: '30', name: 'Store Owner', selected: false },
  { _id: '31', name: 'George\'s Car', selected: false },
  { _id: '32', name: 'snow', selected: false },
]

export function InputElementTagElements({ callback, elementName }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <div className='flex-shrink-0'>
        <InputElementTagLabel>{t('Element')}</InputElementTagLabel>
      </div>
      <AutoInputSelectSansOverlay 
        callback={callback} 
        focusOnMount
        list={elements} 
        placeholder={t('Add/remove element in any category...')}
        value={elementName} 
      />
    </>
  )
}
