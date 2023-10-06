import { CardHorizontal, CardProjectTitle, CardProjectDescription, CardProjectFavorite, CardManage } from 'common'
import { CardProjectHorizontalCreator } from './components'

type Props = {
  color?: string;
  favorite?: boolean;
  manage?: boolean;
  projectId: string;
}

export function CardProjectHorizontal({ color, favorite=true, projectId, manage=true }: Props): JSX.Element {
  return (
    <CardHorizontal>
      <CardProjectTitle projectId={projectId} />
      <CardProjectDescription projectId={projectId} isViewCard={false} />
      <CardProjectHorizontalCreator projectId={projectId} />
      <CardProjectFavorite isVisible={favorite} projectId={projectId} />
      <CardManage isVisible={manage} color={color} managerName='manageProject' />
    </CardHorizontal>
  )
}
