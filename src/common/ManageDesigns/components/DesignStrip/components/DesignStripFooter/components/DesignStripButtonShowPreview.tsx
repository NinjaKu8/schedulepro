import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

import { Tip } from 'common'

export function DesignStripButtonShowPreview(): JSX.Element {
  const { t } = useTranslation()

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click')
  }
  
  return (
    <Tip text={t('Show Preview')} placement='bottom'>
      <Nav.Item as={Button} disabled={false} size='sm' variant='light' onClick={handleClick}>Show Preview</Nav.Item>
    </Tip>
  )
}
