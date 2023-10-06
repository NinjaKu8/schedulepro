import { useCallback } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { FiFilter } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common'
import { useToggle } from 'hooks'

function ButtonTrigger({ callback }: { callback:()=>void }) {
  return (
    <Button variant='outline-info' size='sm' onClick={callback} >
      <FiFilter />
    </Button>
  )
}

export function ButtonFilter(): JSX.Element | null {
  const [ isOpen, toggleIsOpen ] = useToggle(false)
  const { t } = useTranslation()

  const handleUpdate = useCallback((e: string): void => {
    console.log(e)
  },[])

  return (
    isOpen
      ? <InputGroup size='sm'>
          <AutoInput value='' callback={handleUpdate} placeholder={t('Filter list')} autoFocus />
          <ButtonTrigger callback={toggleIsOpen} />      
        </InputGroup>
      : <ButtonTrigger callback={toggleIsOpen} />
  )
}
