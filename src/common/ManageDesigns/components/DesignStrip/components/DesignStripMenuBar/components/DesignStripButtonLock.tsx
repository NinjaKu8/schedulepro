import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'
import { BsFillLockFill } from 'react-icons/bs'

import { Tip } from 'common'

export function DesignStripButtonLock(): JSX.Element {
  const { t } = useTranslation()

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click')
  }

  return (
    <Tip text={t('Lock selected box positions')}>
      <Nav.Item as={Button} disabled={false} size='sm' variant='light' onClick={handleClick}><BsFillLockFill /></Nav.Item>
    </Tip>
  )
}