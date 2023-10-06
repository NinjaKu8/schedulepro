import { CardHorizontalDescription } from 'common'

type Props = {
  userId: string;
}

const user = {
  about: 'This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user This is a description of the user '
}

export function CardUserHorizontalDescription({ userId }: Props): JSX.Element {
  return (
    <CardHorizontalDescription>
      {user.about}
    </CardHorizontalDescription>
  )
}
