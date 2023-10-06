import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useTranslation } from 'react-i18next'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'

import { Tip } from 'common'

export function DesignStripButtonContinue(): JSX.Element {
  const { t } = useTranslation()

  function handleClickDown(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click forward')
  }

  function handleClickRight(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click backward')
  }

  return (
    <Nav.Item as={ButtonGroup} size='sm'>
      <Tip text={t('Wrap text down')}>
        <Button disabled={false} variant='light' onClick={handleClickDown}><FaArrowDown /></Button>
      </Tip>
      <Tip text={t('Continue text to right')}>
        <Button disabled={false} variant='light' onClick={handleClickRight}><FaArrowRight /></Button>
      </Tip>
    </Nav.Item>
  )
}