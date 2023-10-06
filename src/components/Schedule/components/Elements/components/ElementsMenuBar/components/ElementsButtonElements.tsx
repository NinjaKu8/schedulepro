import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { FaElementor } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from 'store/hooks'
import { updateOffcanvasComponent } from 'store/slices/local'
import { Tip } from 'common'

export function ElementsButtonElements(): JSX.Element {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    dispatch(updateOffcanvasComponent('manageElements'))
  },[dispatch])

  return (
    <Tip text={t('Edit Elements')}>
      <Nav.Item as={Button} size='sm' variant='primary' onClick={handleClick}>
        <FaElementor size='1.2em' />
      </Nav.Item>
    </Tip>
  )
}
