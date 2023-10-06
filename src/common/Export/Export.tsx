import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { DropdownTC } from 'common'
import { IDropdownTCItem } from 'common/DropdownTC/DropdownTC'
import { getDropdownItemByEventKey} from 'helpers'

const types: IDropdownTCItem[] = [
  { eventKey: 'uss', value: 'Universal Schedule Standard'},
  { eventKey: 'casper', value: 'Casper'},
  { eventKey: 'generic', value: 'Generic Export'},
]
const formats: IDropdownTCItem[] = [
  { eventKey: '.xlsx', value: 'Excel (.xlsx)'},
  { eventKey: '.csv', value: `${'Comma Separated'} (.csv)`},
]
const datas: IDropdownTCItem[] = [
  { eventKey: 'both', value: 'Breakdowns & Schedule'},
  { eventKey: 'breakdowns', value: 'Breakdowns only'},
]
const orders: IDropdownTCItem[] = [
  { eventKey: 'currentOrder', value: 'Current Category Order'},
  { eventKey: 'casperOrder', value: 'Casper'},
]

export function Export(): JSX.Element {
  const [ currentType, setCurrentType ] = useState(types[0].eventKey)
  const [ currentFormat, setCurrentFormat ] = useState(formats[0].eventKey)
  const [ currentData, setCurrentData ] = useState(datas[0].eventKey)
  const [ currentOrder, setCurrentOrder ] = useState(orders[0].eventKey)
  const { t } = useTranslation()

  const handleSelectType = useCallback((id: string|null): void => { 
    if(id) setCurrentType(id) 
  },[])

  const handleSelectFormat = useCallback((id: string|null): void => { 
    if(id) setCurrentFormat(id) 
  },[])

  const handleSelectData = useCallback((id: string|null): void => { 
    if(id) setCurrentData(id) 
  },[])

  const handleSelectOrder = useCallback((id: string|null): void => { 
    if(id) setCurrentOrder(id) 
  },[])


  return (
    <div className='d-flex flex-column gap-3'>
      <div>
        <p className='lead'>{t('Export Type')}</p>
        <DropdownTC
          callback={handleSelectType}
          items={types}
          selectedItem={getDropdownItemByEventKey(currentType, types)} 
        />
      </div>

      {currentType!=='casper' &&
        <div>
          <p>{t('Included Data')}</p>
          <DropdownTC
            callback={handleSelectData}
            items={datas}
            selectedItem={getDropdownItemByEventKey(currentData, datas)} 
            variant='secondary' 
            size='sm' 
          />
        </div>
      }

      {currentType==='generic' &&
        <div>
          <p>{t('File Format')}</p>
          <DropdownTC
            callback={handleSelectFormat}
            items={formats}
            selectedItem={getDropdownItemByEventKey(currentFormat, formats)}
            variant='secondary' 
            size='sm' 
          />
        </div>
      }

      {currentType==='generic' && 
        <div>
          <p>{t('Category Order')}</p>
          <DropdownTC
            callback={handleSelectOrder}
            items={orders}
            selectedItem={getDropdownItemByEventKey(currentOrder, orders)}
            variant='secondary'
            size='sm'
          />
        </div>
      }
    </div>
  )
}
