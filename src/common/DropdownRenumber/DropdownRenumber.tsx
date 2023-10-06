import { useState, useCallback } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { AutoInput } from 'common'
import { useToggle } from 'hooks'

type Props = {
  callback: (value: string) => void;
  [x: string]: any;
}

export function DropdownRenumber({ callback, ...rest }: Props): JSX.Element {
  const { t } = useTranslation()
  const [show, toggleShow] = useToggle(false)
  const [value, setValue] = useState<string>('1')

  const handleToggle = useCallback((): void => {
    toggleShow()
    setValue('1')
  },[setValue, toggleShow])

  const handleRenumber = useCallback((): void => {
    callback(value)
    handleToggle()
  },[callback, handleToggle, value])

  return (
    <Dropdown show={show} onToggle={handleToggle}>
      <Dropdown.Toggle size='sm' variant='info' {...rest}>{t('Renumber')}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header className='d-flex flex-column gap-2'>
          <AutoInput value={value} callback={setValue} className='text-center' size='sm' type='text' inputMode='numeric' pattern='[0-9]' />
          <Button size='sm' onClick={handleRenumber}>{t('Renumber')}</Button>
        </Dropdown.Header>
      </Dropdown.Menu>
    </Dropdown>
  )
}