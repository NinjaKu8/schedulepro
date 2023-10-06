import { ReactNode } from "react"
import classnames from 'classnames'

type Props = {
  callback?: (e: React.MouseEvent<HTMLDivElement>)=>void;
  children?: ReactNode;
  date?: string;
  disabled?: boolean;
  isSelected?: boolean;
  isSelectedDayOfWeek?: boolean;
}

const calendarDayStyle = { minHeight: '3.5em' }

export function CalendarDay({ callback, children, date, disabled, isSelected, isSelectedDayOfWeek }: Props): JSX.Element {
  return (
    <div 
      data-isodate={date}
      onClick={callback}
      className={classnames(
        'd-flex flex-column flex-1 shadow-sm m-1 p-1 small w-100 rounded-1 border border-secondary hover-highlight user-select-none', 
        disabled && 'text-muted bg-gray-200',
        isSelectedDayOfWeek && !isSelected && 'bg-primary-75 text-light',
        isSelected ? 'bg-selected' : 'bg-white',
      )} 
      style={calendarDayStyle}
    >
      {children}
    </div>
  )
}
