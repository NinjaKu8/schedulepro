
import { ManagerDualPane } from "common"
import { ManageScenariosEdit, ManageScenariosList, ManageScenariosMenuBar } from "./components"

export function ManageScenarios(): JSX.Element {
  return (
    <ManagerDualPane 
      menuBar={<ManageScenariosMenuBar />}
      left={<ManageScenariosList />}
      right={<ManageScenariosEdit />}
    />
  )
}
