import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useTranslation } from 'react-i18next'
import { BsLayerForward, BsLayerBackward } from 'react-icons/bs'

import { Tip } from 'common'

export function DesignStripButtonLevel(): JSX.Element {
  const { t } = useTranslation()

  function handleClickForward(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click forward')
  }

  function handleClickBackward(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click backward')
  }

  return (
    <Nav.Item as={ButtonGroup} size='sm'>
      <Tip text={t('Bring box forward')}>
        <Button disabled={false} variant='light' onClick={handleClickForward}><BsLayerForward /></Button>
      </Tip>
      <Tip text={t('Send box backward')}>
        <Button disabled={false} variant='light' onClick={handleClickBackward}><BsLayerBackward /></Button>
      </Tip>
    </Nav.Item>
  )
}