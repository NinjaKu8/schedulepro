import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import { InputContactWithRemove, ButtonAdd } from 'common'

const contacts = [
  { _id: 'ABC123' },
  { _id: 'ABC456' },
  { _id: 'ABC457' },
  { _id: 'ABC458' },
  { _id: 'ABC459' },
  { _id: 'ABC460' },
]

export function ProfileLinks() {
  const { t } = useTranslation()

  const handleAddLink = useCallback((): void => {
    console.log('link add')
  },[])

  const handleRemoveLink = useCallback((): void => {
    console.log('link remove')
  },[])

  return (
    <Card className='mb-4 shadow'>
      <Card.Body>
        <div className='d-flex justify-content-between mb-3'>
          <h5>{t('Links')}</h5>
          <ButtonAdd callback={handleAddLink} />
        </div>
        <Container className='d-flex flex-column gap-3'>
          <div className='d-flex flex-column gap-2'>
            {contacts.map(contact=>(
              <InputContactWithRemove key={contact._id} contactId={contact._id} callback={handleRemoveLink} />
            ))}
          </div>
        </Container>
      </Card.Body>
    </Card>
  )
}
