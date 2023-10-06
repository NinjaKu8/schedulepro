import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

import { Tip } from 'common'

export function BreakdownButtonDelete(): JSX.Element {
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <Tip text={t('Delete Breakdown')}>
      <Nav.Item as={Button} size='sm' variant='danger' onClick={handleClick}><IoMdRemoveCircleOutline size='1.2em' /></Nav.Item>
    </Tip>
  )
}
