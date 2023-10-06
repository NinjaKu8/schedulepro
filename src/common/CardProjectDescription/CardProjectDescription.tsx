import { CardVerticalDescription, CardHorizontalDescription } from 'common'

type Props = {
  isViewCard?: boolean;
  projectId: string;
}

const project = {
  description: 'This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project This is a description of the project '
}

export function CardProjectDescription({ isViewCard=true, projectId }: Props): JSX.Element {
  return (
    isViewCard
      ? <CardVerticalDescription>
          {project.description}
        </CardVerticalDescription>
      : <CardHorizontalDescription>
          {project.description}
        </CardHorizontalDescription>
  )
}
