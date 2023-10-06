import { ReactNode } from 'react'
import classnames from 'classnames'

import { useAppSelector } from 'store/hooks'

type Props = {
  children?: ReactNode;
  className?: string;
  isDayOff?: boolean;
  isWide?: boolean;
  [x:string]: any;
}

export function DoodCell({ children, className, isWide, isDayOff, ...rest }: Props): JSX.Element | null {
  const isShowColor = useAppSelector(state=>state.local.sch_dood_isShow_color)
  const isShowGrid = useAppSelector(state=>state.local.sch_dood_isShow_grid)
  const isShowDaysOff = useAppSelector(state=>state.local.sch_dood_isShow_daysoff)
  return (
    !isDayOff || (isDayOff && isShowDaysOff)
      ? <div 
          className={classnames(
            'dood__row__cell border-end border-bottom flex-shrink-0', 
            { 
              'dood__row__cell--color': isShowColor,
              'border-white': !isShowGrid,
              'dood__row__cell--wide pointer text-start position-sticky start-0': isWide, 
              'text-center': !isWide, 
              'dood__row__cell--day-off': isDayOff, 
            }
          )} 
          {...rest}
        >
          <div className={className}>
            {children}
          </div>
        </div>
      : null
  )
}
