import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

import { Checkbox, DropdownWithLabel } from 'common'
import { PublishColumn } from '../../common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'

const publishTopSheetItems: IDropdownTCItem[] = [
  { eventKey: 'none', value: 'None'},
  { eventKey: 'first', value: 'On first page'},
  { eventKey: 'last', value: 'On last page'},
]
const publishPageBreakItems: IDropdownTCItem[] = [
  { eventKey: 'natural', value: 'Natural'},
  { eventKey: 'day', value: 'At day break'},
]
const publishStripColorItems: IDropdownTCItem[] = [
  { eventKey: 'palette', value: 'Use palette'},
  { eventKey: 'white', value: 'Force white'},
  { eventKey: 'black', value: 'Force black'},
  { eventKey: 'hide', value: 'Hide'},
]

export function PublishBoardOptions() {
  const { t } = useTranslation()
  return (
    <Row>
      <PublishColumn>
        <DropdownWithLabel variant='secondary' label='Top Sheet' selectedItem={publishTopSheetItems[0]} items={publishTopSheetItems} callback={()=>{}} />
        <DropdownWithLabel variant='secondary' label='Page Breaks' selectedItem={publishPageBreakItems[0]} items={publishPageBreakItems} callback={()=>{}} />
        <Checkbox 
          callback={(e: React.ChangeEvent<HTMLInputElement>)=>{}} 
          checked
          className='d-flex justify-content-between flex-row-reverse ps-0 mt-2'
          label={<small>{t('Show All Days')}</small>}
        />
      </PublishColumn>
      <PublishColumn>
        <DropdownWithLabel variant='secondary' label={t('Banners')} selectedItem={publishStripColorItems[0]} items={publishStripColorItems} callback={()=>{}} />
        <DropdownWithLabel variant='secondary' label={t('Day Breaks')} selectedItem={publishStripColorItems[0]} items={publishStripColorItems} callback={()=>{}} />
      </PublishColumn>
    </Row>
  )
}
