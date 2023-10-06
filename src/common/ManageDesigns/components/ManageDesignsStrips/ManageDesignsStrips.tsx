import { ManagerDualPane } from "common"
import { ManageDesignsStripsEdit, ManageDesignsStripsList, ManageDesignsStripsMenuBar } from "./components"

export function ManageDesignsStrips(): JSX.Element {
  return (
    <ManagerDualPane 
      menuBar={<ManageDesignsStripsMenuBar />}
      left={<ManageDesignsStripsList />}
      right={<ManageDesignsStripsEdit />}
    />
  )
}
