
import { CardTitle } from 'common'

type Props = {
  projectId: string;
}

const project = {
  name: "It's a Wonderful Life",
  season: 'Season 1'
}

export function CardProjectTitle({ projectId }: Props): JSX.Element {
  return (
    <CardTitle 
      title={project.name}
      subtitle={project.season}
      link={`/user/project/${projectId}`}
    />
  )
}
