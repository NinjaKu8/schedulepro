import { AvatarUser, CardScriptFooter, CardVerticalContent, CardVerticalContentHeader, CardVerticalBody, CardVerticalFooter, CardScriptTitle, CardScriptFavorite, CardScriptDescription } from 'common'
import { CardScriptVerticalInfo } from './components'

type CardScriptVerticalProps = {
  color: string;
  scriptId: string;
}

const user = {_id: 'XYZ987'}

export function CardScriptVertical({ color, scriptId }: CardScriptVerticalProps): JSX.Element {
  return (
    <>
      <CardVerticalBody>
        <CardVerticalContent>
          <CardVerticalContentHeader>
            <AvatarUser userId={user._id} size='md' link />
            <CardScriptTitle scriptId={scriptId} />
            <CardScriptFavorite scriptId={scriptId} />
          </CardVerticalContentHeader>
          <CardScriptDescription scriptId={scriptId} />
        </CardVerticalContent>
        <CardScriptVerticalInfo scriptId={scriptId} color={color} />
      </CardVerticalBody>
      <CardVerticalFooter color={color}>
        <CardScriptFooter scriptId={scriptId} color={color} />
      </CardVerticalFooter>
    </>
  )
}
