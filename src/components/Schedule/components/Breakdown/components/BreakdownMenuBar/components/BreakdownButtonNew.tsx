import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { IoMdAdd } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

import { Tip } from 'common'

export function BreakdownButtonNew(): JSX.Element {
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <Tip text={t('New Breakdown')}>
      <Nav.Item as={Button} size='sm' variant='success' onClick={handleClick}><IoMdAdd size='1.2em' /></Nav.Item>
    </Tip>
  )
}
