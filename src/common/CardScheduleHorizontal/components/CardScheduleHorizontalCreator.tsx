import { useTranslation } from 'react-i18next'

import { AvatarCreator, CardHorizontalCreator } from 'common'

type Props = {
  scheduleId: string;
}

export function CardScheduleHorizontalCreator({ scheduleId }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <CardHorizontalCreator>
      <AvatarCreator userId='ABC123'>
        {t('Created')} 7/13/22
      </AvatarCreator>
    </CardHorizontalCreator>
  )
}
