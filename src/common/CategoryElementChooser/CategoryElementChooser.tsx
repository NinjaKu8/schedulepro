import { useCallback, useEffect, useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay'
import { BsCaretDownFill } from 'react-icons/bs'
import Popover from 'react-bootstrap/Popover'
import { useTranslation } from 'react-i18next'

import { CategoryElementChooserList } from './components'
import { ListInput, ListSelect } from 'common'
import { useValueState, useInputSelectState } from 'hooks'

type Props = {
  categoryId: string;
}

const elements = [
  {_id: '0', name: '1. GEORGE', selected: true },
  {_id: '1', name: '2. MARY', selected: false },
  {_id: '2', name: '3. MR. POTTER', selected: true },
  {_id: '3', name: '4. CLARENCE', selected: false },
  {_id: '4', name: '5. ERNIE', selected: false },
  {_id: '5', name: '6. BERT', selected: false },
  {_id: '6', name: '7. VIOLET', selected: false },
  {_id: '7', name: '8. UNCLE BILLY', selected: false },
  {_id: '8', name: '9. COUSIN EUSTICE', selected: false },
  {_id: '9', name: '10. COUSIN TILLY', selected: false },
  {_id: '10', name: '11. GOWER', selected: false },
]

const listStyle = { maxHeight: '12em' }

export function CategoryElementChooser({ categoryId }: Props): JSX.Element {
  const { t } = useTranslation()

  const handleCallback = useCallback((id: string|null, value?: string): void => {
    if(!id) return
    if(id==='create' && value) {
      console.log('create element:', value, ', categoryId:', categoryId)
    } else {
      console.log('add remove elements:', id)
    }
  },[categoryId])

  const [ tempValue, setTempValue ] = useValueState('')
  const { selectedId, setSelectedId, show, setShow, filteredList, handleOnKeyDown } = useInputSelectState({list: elements, value: tempValue, setValue: setTempValue, callback: handleCallback})

  const triggerTarget = useRef<HTMLDivElement>(null)
  const inputTarget = useRef<HTMLInputElement>(null)

  function toggleShow(): void {
    setShow(!show)
  }

  const handleOnHide = useCallback((): void => {
    setShow(false)
  },[setShow])

  const handleClickListSelectItem = useCallback((id: string): void => {
    handleCallback(id)
    setTempValue('')
    setSelectedId(filteredList[0]?._id)
  },[ handleCallback, filteredList, setTempValue, setSelectedId ])

  const handleClickChooserListItem = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault()
    const value = e.currentTarget.dataset.itemid
    console.log('click chooserList elementId:', value, ', categoryId:', categoryId)
  },[categoryId])

  useEffect(()=>{ 
    if(show) inputTarget?.current?.focus() 
  },[show])

  return (
    <>
      <div ref={triggerTarget} onClick={toggleShow}><BsCaretDownFill /></div>
      <Overlay target={triggerTarget.current} show={show} onHide={handleOnHide} placement='auto' flip rootClose>
        <Popover id='elements-category-list' className='rounded-1 shadow overflow-hidden'>
          <Popover.Header as='h6' className='rounded-0'>Cast</Popover.Header>
          <Popover.Body className='p-0 d-flex flex-column'>
            <div className='p-1'>
              <ListInput 
                className='rounded-0'
                handleOnKeyDown={handleOnKeyDown}
                placeholder={t('Add/remove element...')}
                ref={inputTarget}
                setShow={setShow}
                setValue={setTempValue}
                size='sm'
                value={tempValue}
              />
            </div>
            {tempValue.length>0
              ? <ListSelect 
                  callback={handleClickListSelectItem} 
                  list={filteredList} 
                  selectedId={selectedId}
                  style={listStyle}
                />
              : <CategoryElementChooserList 
                  callback={handleClickChooserListItem}
                  elements={elements}
                  style={listStyle}
                />
            }
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
  )
}
