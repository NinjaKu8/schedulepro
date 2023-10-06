import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { CreateAccountForm } from 'common'
import { IJoinObject } from 'types/types'

export default function CreateAccount(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleSuccess = ({ firstname, middlename, lastname, email, password }: IJoinObject): void => {
    console.log({ firstname, middlename, lastname, email, password })
    navigate('success')
  }

  return (
    <>
      <h1 className='display-4 mt-5 text-center'>{t('Join Think Crew')}</h1>
      <p className='lead mb-5 text-center'>
        <Trans i18nKey='createaccount-title'>
          Create your account for free & start scheduling today!
        </Trans>
      </p>

      <CreateAccountForm handleSuccess={handleSuccess} />
    </>
  )
}
