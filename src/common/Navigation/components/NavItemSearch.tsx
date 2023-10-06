import { useState, useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import CloseButton from "react-bootstrap/CloseButton"
import { BsSearch } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

import { AutoInput } from "common"

export function NavItemSearch(): JSX.Element {
  const navigate = useNavigate()
  const [ value, setValue ] = useState('')
  const { t } = useTranslation()

  const handleSearch = useCallback((query: string): void => {
    navigate({ pathname: '/user/search', search: `?query=${query}` })
    setValue('')
  },[navigate])

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  },[setValue])

  const handleReset = useCallback((): void => {
    setValue('')
  },[setValue])

  return (
    <>
      <div className='d-none d-lg-inline'>
        <InputGroup size='sm'>
          <AutoInput 
            blur={false}
            callback={handleSearch} 
            onChange={handleOnChange}
            value={value} 
            placeholder={t('Search')} 
            size='sm'
          />
          <InputGroup.Text onClick={handleReset}><CloseButton /></InputGroup.Text>
        </InputGroup>
      </div>
      <div className='d-sm-inline d-lg-none'>
        <Button as={NavLink as any} to='/user/search' variant='white'><BsSearch className='fs-4' /></Button>
      </div>
    </>
  )
}
