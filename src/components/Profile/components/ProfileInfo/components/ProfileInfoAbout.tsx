import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Form from 'react-bootstrap/Form'

import { AutoInput, FormLabel } from 'common'

const aboutStyles = {minHeight: '7em'}

export function ProfileInfoAbout(): JSX.Element {
  const { t } = useTranslation()

  const handleNameChange = useCallback((): void => {
    console.log('name change')
  },[])

  return (
    <Form.Group>
      <FormLabel>{t('About Me')}</FormLabel>
      <AutoInput style={aboutStyles} as='textarea' size='sm' callback={handleNameChange} value='Think Crew founder, feature film producer and DGA UPM.' />
    </Form.Group>
  )
}
