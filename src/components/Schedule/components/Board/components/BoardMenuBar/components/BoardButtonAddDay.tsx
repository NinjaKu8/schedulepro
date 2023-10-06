import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { BiCalendarPlus } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

import { Tip } from 'common'

export function BoardButtonAddDay(): JSX.Element {
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <Tip text={t('Add Day')}>
      <Nav.Item as={Button} size='sm' variant='success' onClick={handleClick}><BiCalendarPlus size='1.2em' /></Nav.Item>
    </Tip>
  )
}
