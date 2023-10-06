import { useTranslation } from 'react-i18next'

import { AvatarCreator, CardHorizontalCreator } from 'common'

type Props = {
  scriptId: string;
}

export function CardScriptHorizontalCreator({ scriptId }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <CardHorizontalCreator>
      <AvatarCreator userId='ABC123'>
        {t('Uploaded')} 7/13/22
      </AvatarCreator>
    </CardHorizontalCreator>
  )
}
