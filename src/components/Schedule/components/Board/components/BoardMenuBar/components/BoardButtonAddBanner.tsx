import { useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { MdPostAdd } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { Tip } from 'common'

export function BoardButtonAddBanner(): JSX.Element {
  const { t } = useTranslation()

  const handleClick = useCallback((): void => {
    console.log('click')
  },[])

  return (
    <Tip text={t('Add Banner')}>
      <Nav.Item as={Button} size='sm' variant='success' onClick={handleClick}><MdPostAdd size='1.2em' /></Nav.Item>
    </Tip>
  )
}
