
import { DoodCell } from '../../../../index'

type Props = {
  total: number | Date;
}

export function DoodTotal({ total }: Props): JSX.Element {
  return (
    typeof(total)==='number'
      ? <DoodCell>{total}</DoodCell>
      : <DoodCell>{total.toLocaleDateString().slice(0,-5)}</DoodCell>   
  )
}
