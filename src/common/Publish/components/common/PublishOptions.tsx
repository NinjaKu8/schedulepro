import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

import { PublishColumn } from './index'
import { Checkbox, DropdownWithLabel } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'

const publishSaveAsItems: IDropdownTCItem[] = [
  { eventKey: 'pdf', value: 'PDF'},
  { eventKey: 'excel', value: 'Excel'},
]
const publishPageSizeItems: IDropdownTCItem[] = [
  { eventKey: 'letter', value: 'Letter'},
  { eventKey: 'legal', value: 'Legal'},
  { eventKey: 'a4', value: 'A4'},
  { eventKey: 'tabloid', value: 'Tabloid'},
]
const publishPageLayoutItems: IDropdownTCItem[] = [
  { eventKey: 'portrait', value: 'Portrait'},
  { eventKey: 'landscape', value: 'Landscape'},
]

export function PublishOptions(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Row>
      <PublishColumn>
        <DropdownWithLabel variant='secondary' label={t('Save as')} selectedItem={publishSaveAsItems[0]} items={publishSaveAsItems} callback={()=>{}} />
        <Checkbox 
          callback={(e: React.ChangeEvent<HTMLInputElement>)=>{}} 
          checked
          className='d-flex justify-content-between flex-row-reverse ps-0 mt-2'
          label={<small>{t('Publish in color')}</small>}
        />
      </PublishColumn>
      <PublishColumn>
        <DropdownWithLabel variant='secondary' label={t('Page Size')} selectedItem={publishPageSizeItems[0]} items={publishPageSizeItems} callback={()=>{}} />
        <DropdownWithLabel variant='secondary' label={t('Page Layout')} selectedItem={publishPageLayoutItems[0]} items={publishPageLayoutItems} callback={()=>{}} />
      </PublishColumn>
    </Row>
  )
}
