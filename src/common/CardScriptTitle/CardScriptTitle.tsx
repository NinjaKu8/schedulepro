
import { CardTitle } from 'common'

type Props = {
  scriptId: string;
}

const script = {
  name: "Revised Blue",
  season: 'S1 :: E02'
}

export function CardScriptTitle({ scriptId }: Props): JSX.Element {
  return (
    <CardTitle 
      title={script.name}
      subtitle={script.season}
      link={`/user/script/${scriptId}`}
    />
  )
}
