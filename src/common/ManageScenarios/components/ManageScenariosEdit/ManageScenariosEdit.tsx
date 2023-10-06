import { ManagerEdit } from "common"
import { ManageScenariosName, ManageScenariosCalendar, ManageScenariosBoards } from "./components"

export function ManageScenariosEdit(): JSX.Element {
  return (
    <ManagerEdit>
      <ManageScenariosName />
      <ManageScenariosCalendar />
      <ManageScenariosBoards />
    </ManagerEdit>
  )
}
