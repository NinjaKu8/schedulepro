import { AvatarUser, CardProjectFooter, CardVerticalContent, CardVerticalContentHeader, CardVerticalBody, CardVerticalFooter, CardProjectTitle, CardProjectFavorite, CardProjectDescription } from 'common'
import { CardProjectVerticalInfo } from './components'

type CardProjectVerticalProps = {
  color: string;
  projectId: string;
}

const user = {_id: 'XYZ987'}

export function CardProjectVertical({ color, projectId }: CardProjectVerticalProps): JSX.Element {
  return (
    <>
      <CardVerticalBody>
        <CardVerticalContent>
          <CardVerticalContentHeader>
            <AvatarUser userId={user._id} size='md' link />
            <CardProjectTitle projectId={projectId} />
            <CardProjectFavorite projectId={projectId} />
          </CardVerticalContentHeader>
          <CardProjectDescription projectId={projectId} />
        </CardVerticalContent>
        <CardProjectVerticalInfo projectId={projectId} color={color} />
      </CardVerticalBody>
      <CardVerticalFooter color={color}>
        <CardProjectFooter projectId={projectId} color={color} />
      </CardVerticalFooter>
    </>
  )
}
