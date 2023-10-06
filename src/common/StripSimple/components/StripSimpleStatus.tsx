import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'

import { breakdowns } from './StripSimpleBreakdownField'
import { dateTimeFormat } from 'helpers'
import { useToggle } from 'hooks'
import { AutoInput } from 'common/AutoInput'

type Props = {
  breakdownId: string;
}

type StatusState = string | null | undefined

const statuses: StatusState[] = [
  'none',
  'shooting',
  'part',
]

function StripSimpleButton({ statusState, variant, callback }: {statusState: StatusState, variant: string, callback: ()=>void}): JSX.Element {
  const { t } = useTranslation()
  return (
    <Button 
      size='sm' 
      variant={variant}
      onClick={callback}
    >
      {statusState ? t(statusState) : 'none'}
    </Button>
  )
}

function StripSimpleTime({ completedTime }: {completedTime: string | null}): JSX.Element {
  const [ isEditing, toggleIsEditing ] = useToggle(false)
  const formattedTime = completedTime ? dateTimeFormat(completedTime, 'h:mmaaaaa') : 'Done'
  function handleClick(): void {
    toggleIsEditing()
  }
  function handleEditTime(value: string): void {
    console.log('handleEditTime', value)
  }
  return (
    <div onClick={handleClick}>
      {isEditing
        ? <AutoInput callback={handleEditTime} size='sm' className='text-center' value={completedTime ? formattedTime : ''} />
        : formattedTime
      }
    </div>
  )
}

export function StripSimpleStatus({ breakdownId }: Props): JSX.Element {
  const breakdown = breakdowns.find(b => b.id === breakdownId)

  const [ statusState, setStatusState ] = useState<StatusState>(breakdown?.status)

  function handleClick(): void {
    if(statusState) {
      const index = statuses.indexOf(statusState)
      const nextIndex = index === statuses.length - 1 ? 0 : index + 1
      setStatusState(statuses[nextIndex])
    }
  }

  const variant = statusState==='part'
    ? 'warning'
    : statusState==='shooting'
      ? 'success'
      : 'outline-secondary'

  return (
    <div className='pointer'>
      {breakdown?.isComplete 
        ? <StripSimpleTime completedTime={breakdown.completedTime} />
        : <StripSimpleButton statusState={statusState} variant={variant} callback={handleClick} />
      }
    </div>
  )
}