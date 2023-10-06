import { useCallback, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { AutoInputSelectMulti } from 'common'
import { IListSelectItem } from 'common/ListSelect/ListSelect'

const list: IListSelectItem[] = [
  {_id: '0', name: 'GEORGE', selected: true },
  {_id: '1', name: 'MARY', selected: false },
  {_id: '2', name: 'MR. POTTER', selected: true },
  {_id: '3', name: 'CLARENCE', selected: false },
  {_id: '4', name: 'ERNIE', selected: false },
  {_id: '5', name: 'BERT', selected: false },
  {_id: '6', name: 'VIOLET', selected: false },
  {_id: '7', name: 'UNCLE BILLY', selected: false },
  {_id: '8', name: 'COUSIN EUSTICE', selected: false },
  {_id: '9', name: 'COUSIN TILLY', selected: false },
  {_id: '10', name: 'GOWER', selected: false },
]
const initialLinkIds: string[] = ['0','1','2',]

export function ManageElementsLinks(): JSX.Element {
  const [ linkIds, setLinkIds ] = useState<string[]>(initialLinkIds) // in lieu of redux store element.linkIds
  const { t } = useTranslation()

  const handleSelectItem = useCallback((id: string|null, value?: string) => {
    if(!id) return
    setLinkIds(linkIds.includes(id)
      ? linkIds.filter(i=>i!==id)
      : [...linkIds, id]
    )
  },[linkIds, setLinkIds])

  return (
    <div className='d-flex flex-column gap-2'>
      <p className='lead mb-2'>{t('Linked Elements')}</p>
      <div className='d-flex flex-column gap-2 px-4'>
        <AutoInputSelectMulti 
          callback={handleSelectItem}
          list={list} 
          selectedIds={linkIds} 
        />
        <div>
          <Button size='sm'>{t('Add to all')}</Button>
        </div>
      </div>
    </div>
  )
}
