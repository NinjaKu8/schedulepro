import { useCallback, useId } from 'react'
import { useTranslation } from 'react-i18next'

import { InputContactWithRemove, FormLabelWithAdd } from 'common'

const contacts = [
  { _id: 'ABC123' },
  { _id: 'ABC456' },
]

export function ProfileInfoPhone(): JSX.Element {
  const { t } = useTranslation()
  const id = useId()

  const handleAddPhone = useCallback((): void => {
    console.log('add email')
  },[])

  const handleRemovePhone = useCallback((): void => {
    console.log('remove email')
  },[])

  return (
    <div className='d-flex flex-column gap-3'>
      <FormLabelWithAdd text={t('Phone')} callback={handleAddPhone} htmlFor={id} />
      {contacts.map(contact=>(
        <InputContactWithRemove
          callback={handleRemovePhone}
          contactId={contact._id}
          id={id}
          inputMode='tel'
          key={contact._id}
          type='tel'
        />
      ))}
    </div>
  )
}
