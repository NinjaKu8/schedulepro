import { useCallback, useId } from 'react'
import { useTranslation } from 'react-i18next'

import { InputContactWithRemove, FormLabelWithAdd } from 'common'

const contacts = [
  { _id: 'ABC123' },
  { _id: 'ABC456' },
]

export function ProfileInfoEmail(): JSX.Element {
  const { t } = useTranslation()
  const id = useId()

  const handleAddEmail = useCallback((): void => {
    console.log('add email')
  },[])

  const handleRemoveEmail = useCallback((): void => {
    console.log('remove email')
  },[])

  return (
    <div className='d-flex flex-column gap-3'>
      <FormLabelWithAdd text={t('Email')} callback={handleAddEmail} htmlFor={id} />
      {contacts.map(contact=>(
        <InputContactWithRemove
          callback={handleRemoveEmail}
          contactId={contact._id}
          id={id}
          inputMode='email'
          key={contact._id}
          type='email'
        />
      ))}
    </div>
  )
}
