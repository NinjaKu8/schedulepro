import { CalendarButtonBlackout, CalendarButtonStart, CalendarDropdownEvents } from "./components"

export function CalendarButtons(): JSX.Element {
  return (
    <div className='d-flex justify-content-center gap-2'>
      <CalendarButtonStart />
      <CalendarButtonBlackout />
      <CalendarDropdownEvents />
    </div>
  )
}
