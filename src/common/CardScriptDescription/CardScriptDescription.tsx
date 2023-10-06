import { CardVerticalDescription, CardHorizontalDescription } from 'common'

type Props = {
  isViewCard?: boolean;
  scriptId: string;
}

const script = {
  description: 'This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script This is a description of the script '
}

export function CardScriptDescription({ isViewCard=true, scriptId }: Props): JSX.Element {
  return (
    isViewCard
      ? <CardVerticalDescription>
          {script.description}
        </CardVerticalDescription>
      : <CardHorizontalDescription>
          {script.description}
        </CardHorizontalDescription>
  )
}
