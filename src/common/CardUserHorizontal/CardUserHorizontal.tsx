import { AvatarNameTitle, CardHorizontal } from 'common'
import { CardUserHorizontalDescription } from './components'

type Props = {
  userId: string;
}

export function CardUserHorizontal({ userId }: Props): JSX.Element {
  return (
    <CardHorizontal>
      <AvatarNameTitle userId={userId} />
      <CardUserHorizontalDescription userId={userId} />
    </CardHorizontal>
  )
}
