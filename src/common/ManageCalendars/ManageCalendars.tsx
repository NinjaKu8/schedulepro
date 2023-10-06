
import { ManagerDualPane } from "common"
import { ManageCalendarsEdit, ManageCalendarsList, ManageCalendarsMenuBar } from "./components"

export function ManageCalendars(): JSX.Element {
  return (
    <ManagerDualPane 
      menuBar={<ManageCalendarsMenuBar />}
      left={<ManageCalendarsList />}
      right={<ManageCalendarsEdit />}
    />
  )
}
