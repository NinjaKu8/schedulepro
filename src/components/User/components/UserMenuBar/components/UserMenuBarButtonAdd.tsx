import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useNotify } from 'hooks'
import { NotifyBodyProjectAdd, NotifyHeader, ButtonPageNav } from 'common'

type Props = {
  className?: string;
}

export function UserMenuBarButtonAdd({ className }: Props): JSX.Element {
  const { t } = useTranslation()
  const { addNotify } = useNotify()

  const handleShowNotify = useCallback((): void => {
    addNotify({ title: <NotifyHeader text='Added to Its a Wonderful Life' />, message: <NotifyBodyProjectAdd userId='XXX' projectId='XXX' />})
  },[addNotify])

  return (
    <ButtonPageNav variant='success' size='sm' onClick={handleShowNotify}>{t('Add to Current Project')}</ButtonPageNav>
  )
}
