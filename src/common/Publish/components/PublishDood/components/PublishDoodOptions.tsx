import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

import { AutoInput, Checkbox, DropdownFilterElements, DropdownWithLabel } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { PublishColumn } from '../../common'

const publishHeaderBoardItems: IDropdownTCItem[] = [
  { eventKey: 'all', value: 'On All Pages'},
  { eventKey: 'first', value: 'First Page Only'},
]

export function PublishDoodOptions(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Row>
      <PublishColumn>
        <DropdownWithLabel variant='secondary' label='Header Board' selectedItem={publishHeaderBoardItems[0]} items={publishHeaderBoardItems} callback={()=>{}} />
        <div>
          <div className='small'>{t('Filter Elements')}</div>
          <DropdownFilterElements className='d-flex flex-column gap-2' dropdownClassName='d-flex flex-column' callback={()=>{}} />
        </div>
        <div>
          <div className='small'>{t('Date Range')}</div>
          <AutoInput value='9/13/23 - 11/15/23' size='sm' className='text-center' callback={()=>{}} />
        </div>
      </PublishColumn>
      
      <PublishColumn>
        <Checkbox 
          callback={(e: React.ChangeEvent<HTMLInputElement>)=>{}} 
          checked
          className='d-flex justify-content-between flex-row-reverse ps-0 mt-4'
          label={<small>{t('Show Days Off')}</small>}
        />
        <Checkbox 
          callback={(e: React.ChangeEvent<HTMLInputElement>)=>{}} 
          checked
          className='d-flex justify-content-between flex-row-reverse ps-0 mt-2'
          label={<small>{t('Hide non-working elements')}</small>}
        />
      </PublishColumn>
    </Row>
  )
}
