import { useTranslation } from 'react-i18next'

import { AvatarCreator, CardHorizontalCreator} from 'common'

type Props = {
  projectId: string;
}

export function CardProjectHorizontalCreator({ projectId }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <CardHorizontalCreator>
      <AvatarCreator userId='ABC123'>
        {t('Created')} 7/13/22
      </AvatarCreator>
    </CardHorizontalCreator>
  )
}
