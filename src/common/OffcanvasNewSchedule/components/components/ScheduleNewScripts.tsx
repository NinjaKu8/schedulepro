import { useCallback, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'

import { ListSelectMulti, PopoverInfo } from 'common'
import { IListSelectItem } from 'common/ListSelect/ListSelect'

const scripts: IListSelectItem[] = [
  {_id: '0', name: 'First Draft', selected: true },
  {_id: '1', name: 'Blue Draft', selected: false },
  {_id: '2', name: 'Pink Draft', selected: true },
  {_id: '3', name: 'Yellow Draft', selected: false },
  {_id: '4', name: 'Green Draft', selected: false },
  {_id: '5', name: 'Goldenrod Draft', selected: false },
  {_id: '6', name: 'Buff Draft', selected: false },
  {_id: '7', name: 'Cherry Draft', selected: false },
  {_id: '8', name: 'Tan Draft', selected: false },
]
const listStyle = { height: '6.7em', maxHeight: '6.7em' }

export function ScheduleNewScripts(): JSX.Element {
  const { t } = useTranslation()

  const [ selectedIds, setSelectedIds ] = useState<string[]>([])

  const handleClickItem = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const id = e.currentTarget.dataset.itemid
    if(id) {
      if(selectedIds.includes(id)) {
        setSelectedIds(selectedIds => [...selectedIds.filter(i=>i!==id)])
      } else {
        console.log('does not inclue')
        setSelectedIds(selectedIds => [...selectedIds.filter(i=>i!==id), id])
      }
    }
  },[selectedIds])

  return (
    <Form.Group>
      <div className='d-flex gap-2 align-items-center mb-2'>
        <Form.Label className='text-muted small mb-0'>{t('Scripts')}</Form.Label>
        <PopoverInfo>
          Your scripts can be imported into your schedule. By selecting a script, all of the data from that script will be imported into your schedule, including breakdowns, characters and more. 
        </PopoverInfo>
      </div>
      <Card className='border-gray-300 border-1 m-0'>
        <Card.Body>
          <ListSelectMulti 
            callback={handleClickItem}
            list={scripts}
            selectedIds={selectedIds}
            style={listStyle}
          />
        </Card.Body>
      </Card>
    </Form.Group>
  )
}
