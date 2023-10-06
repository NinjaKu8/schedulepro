import { ManagerDualPane } from "common"
import { ManageElementsEdit, ManageElementsList, ManageElementsMenuBar } from "./components"

export function ManageElements(): JSX.Element {
  return (
    <ManagerDualPane 
      menuBar={<ManageElementsMenuBar />}
      left={<ManageElementsList />}
      right={<ManageElementsEdit />}
    />
  )
}
