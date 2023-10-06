import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

import { DropdownWithLabel } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { PublishColumn } from '../../common'

const publishBoardItems: IDropdownTCItem[] = [
  { eventKey: 'category', value: 'Category Report'},
]
const publishCategoryItems: IDropdownTCItem[] = [
  { eventKey: '1', value: 'Cast'},
  { eventKey: '2', value: 'Background'},
  { eventKey: '3', value: 'Vehicles'},
  { eventKey: '4', value: 'Stunts'},
]

export function PublishReportsSelectors(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Row>
      <PublishColumn>
        <DropdownWithLabel label={t('Type')} selectedItem={publishBoardItems[0]} items={publishBoardItems} callback={()=>{}} />
      </PublishColumn>
      <PublishColumn>
        <DropdownWithLabel label={t('Category')} selectedItem={publishCategoryItems[0]} items={publishCategoryItems} callback={()=>{}} />
      </PublishColumn>
    </Row>
  )
}
