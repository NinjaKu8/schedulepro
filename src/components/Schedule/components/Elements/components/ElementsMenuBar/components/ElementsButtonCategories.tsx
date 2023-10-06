import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { BiCategoryAlt } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from 'store/hooks'
import { updateOffcanvasComponent } from 'store/slices/local'
import { Tip } from 'common'

export function ElementsButtonCategories(): JSX.Element {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    dispatch(updateOffcanvasComponent('manageCategories'))
  },[dispatch])

  return (
    <Tip text={t('Edit Categories')}>
      <Nav.Item as={Button} size='sm' variant='primary' onClick={handleClick}>
        <BiCategoryAlt size='1.2em' />
      </Nav.Item>
    </Tip>
  )
}
