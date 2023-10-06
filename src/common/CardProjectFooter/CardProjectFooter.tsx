import { useTranslation } from 'react-i18next'

import { CardFooterItem } from "common"

type Props = {
  color: string;
  projectId: string;
}

const project = {
  scripts: '3',
  schedules: '7',
  users: '4',
}

export function CardProjectFooter({ color, projectId }: Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='d-flex justify-content-evenly'>
      <CardFooterItem title={t('Scripts')} text={project.scripts} color={color} />
      <CardFooterItem title={t('Scheds')} text={project.schedules} color={color} />
      <CardFooterItem title={t('Users')} text={project.users} color={color} />
    </div>
  )
}
