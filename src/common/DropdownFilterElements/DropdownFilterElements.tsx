import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AutoInput, DropdownTC } from "common"
import { IDropdownTCItem } from "common/DropdownTC/DropdownTC"
import { getDropdownItemByEventKey } from 'helpers'

type Props = {
  className?: string;
  callback: ()=>void;
  dropdownClassName?: string;
}

const filterElementItems: IDropdownTCItem[] = [
  { eventKey: 'all', value: 'Show all' },
  { eventKey: 'work', value: 'Work' },
  { eventKey: 'hold', value: 'Hold' },
  { eventKey: 'travel', value: 'Travel' },
  { eventKey: 'holiday', value: 'Holiday' },
]

const inputStyle = { width: '3.5em'}

export function DropdownFilterElements({ className, dropdownClassName, callback }: Props): JSX.Element {
  const [ selectedEventKey, setSelectedEventKey ] = useState(filterElementItems[0].eventKey)
  const [ inputValue, setInputValue ] = useState('0')
  const { t } = useTranslation()

  const handleSelectItem = useCallback((key: string | null): void => {
    if(key) {
      setSelectedEventKey(key)
      callback() // TODO: PASS THE VALUES BACK UP TO THEIR PARENT
      console.log('handleSelectItem', selectedEventKey, inputValue)
    }
  },[callback, selectedEventKey, inputValue])

  return (
    <div className={className}>
      <DropdownTC
        className={dropdownClassName}
        selectedItem={getDropdownItemByEventKey(selectedEventKey, filterElementItems)}
        items={filterElementItems}
        callback={handleSelectItem}
        size='sm'
        variant='secondary'
      />
      {selectedEventKey!==filterElementItems[0].eventKey &&
        <div className='d-flex gap-1 mx-auto'>
          <div className='small align-self-center'>{t('Min')}</div>
          <div>
            <AutoInput
              value={inputValue}
              callback={setInputValue}
              style={inputStyle}
              className='text-center'
              size='sm'
            />
            </div>
          <div className='small align-self-center'>{t('Days')}</div>
        </div>
      }
    </div>
  )
}
