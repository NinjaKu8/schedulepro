import { ManagerEdit } from "common"
import { ManageCalendarsName, ManageCalendarsCalendar } from "./components"

export function ManageCalendarsEdit(): JSX.Element {
  return (
    <ManagerEdit>
      <ManageCalendarsName />
      <ManageCalendarsCalendar />
    </ManagerEdit>
  )
}
