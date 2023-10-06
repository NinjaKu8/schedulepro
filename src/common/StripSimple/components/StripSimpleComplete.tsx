
import { breakdowns } from './StripSimpleBreakdownField'
import { Checkbox } from 'common'

type Props = {
  breakdownId: string;
}

export function StripSimpleComplete({ breakdownId, ...rest }: Props): JSX.Element {
  const breakdown = breakdowns.find(b => b.id === breakdownId)

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log('clicked', breakdownId, e.target.checked)
  }
  return (
    <Checkbox callback={handleCheck} checked={breakdown?.isComplete} size='lg' {...rest} />
  )
}