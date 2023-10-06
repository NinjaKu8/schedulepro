import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

import { DropdownWithLabel } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { PublishColumn } from '../../common'

const publishBoardItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'First Unit'},
  { eventKey: '2', value: 'Second Unit'},
  { eventKey: '3', value: 'VFX Unit'},
  { eventKey: '4', value: 'Recycle'},
]
const publishLayoutDesignItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'Medium'},
  { eventKey: '2', value: 'Thin'},
  { eventKey: '3', value: 'Thick'},
  { eventKey: '4', value: 'Shooting Schedule'},
]
const publishCategoryItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'Cast'},
  { eventKey: '2', value: 'Background'},
  { eventKey: '3', value: 'Vehicles'},
  { eventKey: '4', value: 'Stunts'},
]

export function PublishBoardSelectors(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Row>
      <PublishColumn>
        <DropdownWithLabel label={t('Board')} selectedItem={publishBoardItems[0]} items={publishBoardItems} callback={()=>{}} />
        <DropdownWithLabel label={t('Categories')} selectedItem={publishCategoryItems[0]} items={publishCategoryItems} callback={()=>{}} />
      </PublishColumn>
      <PublishColumn>
        <DropdownWithLabel label={t('Layout Design')} selectedItem={publishLayoutDesignItems[0]} items={publishLayoutDesignItems} callback={()=>{}} />
      </PublishColumn>
    </Row>
  )
}
