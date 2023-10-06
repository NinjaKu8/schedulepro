// import { FaArrowRight } from "react-icons/fa"

import { CalendarDay } from 'common'
// import { FlagText } from 'common'
import { dateFormat } from 'helpers'

type Props = {
  callback: (e: React.MouseEvent<HTMLDivElement>)=>void;
  date?: string;
  dayOfWeek: number;
  disabled?: boolean;
  isSelected?: boolean;
}

export function CalendarContent({ callback, date, dayOfWeek, disabled, isSelected }: Props): JSX.Element {
  return (
    <CalendarDay 
      date={date}
      callback={callback}
      disabled={disabled}
      isSelected={isSelected}
      isSelectedDayOfWeek={[0,6].includes(dayOfWeek)}
    >
      <div className='d-flex align-items-center justify-content-between'>
        {date!==undefined && dateFormat(date,'d')}
        {/* <FaArrowRight /> */}
      </div>
      <div className='d-flex flex-wrap justify-content-center small'>
        {/* <FlagText>S</FlagText>
        <FlagText isFlagged tipText="George can't work on 1/12/23">W</FlagText>
        <FlagText>T</FlagText>
        <FlagText>F</FlagText> */}
      </div>
    </CalendarDay>
  )
}
