
import { ManagerDualPane } from "common"
import { ManagePanesEdit, ManagePanesList, ManagePanesMenuBar } from "./components"

export function ManagePanes(): JSX.Element {
  return (
    <ManagerDualPane 
      menuBar={<ManagePanesMenuBar />}
      left={<ManagePanesList />}
      right={<ManagePanesEdit />}
    />
  )
}
