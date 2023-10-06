import { Avatar } from 'common'
import { useAppSelector } from 'store/hooks'
import { selectUserAvatarCroppedURI } from 'selectors/userSelectors'

type Props = {
  userId: string
  [x: string]: any
}

export function AvatarUser({ userId, ...rest }: Props): JSX.Element {
  const userAvatarCroppedURI = useAppSelector(selectUserAvatarCroppedURI)

  return (
    <Avatar
      src={userAvatarCroppedURI}
      name="Michael R. Williams"
      online={true}
      linkTo={`/user/${userId}`}
      {...rest}
    />
  )
}
