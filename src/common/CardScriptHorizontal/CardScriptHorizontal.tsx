import { CardHorizontal, CardManage, CardScriptDescription, CardScriptFavorite, CardScriptTitle } from 'common'
import { CardScriptHorizontalCreator } from './components'

type Props = {
  color?: string;
  favorite?: boolean;
  manage?: boolean;
  scriptId: string;
}

export function CardScriptHorizontal({ color, favorite=true, scriptId, manage=true }: Props): JSX.Element {
  return (
    <CardHorizontal>
      <CardScriptTitle scriptId={scriptId} />
      <CardScriptDescription scriptId={scriptId} isViewCard={false} />
      <CardScriptHorizontalCreator scriptId={scriptId} />
      <CardScriptFavorite scriptId={scriptId} isVisible={favorite} />
      <CardManage isVisible={manage} color={color} managerName='manageScript' />
    </CardHorizontal>
  )
}
