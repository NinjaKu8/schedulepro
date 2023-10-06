import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Checkbox } from 'common'

export function ProfilePrefShowPhone(): JSX.Element {
  const { t } = useTranslation()

  const handleClickCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e)
  },[])

  return (
    <Checkbox 
      callback={handleClickCheckbox} 
      checked
      className='d-flex justify-content-between flex-row-reverse px-0 mb-4'
      label={t('Show my phone number')}
    />
  )
}
