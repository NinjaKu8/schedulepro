import { ReactNode } from 'react'

import { Tip } from 'common'
import { Flag } from './components'

type Props = {
  children?: ReactNode;
  className?: string;
  isFlagged?: boolean;
  tipText?: string;
}

export function FlagText({ children, className, isFlagged, tipText }: Props): JSX.Element {
  return (
    isFlagged
      ? <Tip text={tipText}>
          <div>
            <Flag className={className} isFlagged={true}>{children}</Flag>
          </div>
        </Tip>
      : <Flag className={className}>{children}</Flag>
  )
}
