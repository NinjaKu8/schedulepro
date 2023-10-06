import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { CreateAccountForm } from 'common'
import { IJoinObject } from 'types/types'

export default function Invite(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleSuccess = ({ firstname, middlename, lastname, email, password }: IJoinObject): void => {
    console.log({ firstname, middlename, lastname, email, password })
    navigate('success')
  }

  return (
    <>
      <h1 className='display-4 mt-5 text-center'>{t('Welcome to Think Crew')}</h1>
      <p className='lead text-center'>
        <Trans i18nKey='invite-title'>
          To complete your invitation, please provide us with your account information. It's FREE to join. 
        </Trans>
      </p>
      <p className='mb-5 text-center'>
        <Trans i18nKey='invite-title'>
          When you're done, you'll automatically be added to any projects you were invited to.
        </Trans>
      </p>

      <CreateAccountForm handleSuccess={handleSuccess} />
    </>
  )
}
