import { ManagerDualPane } from "common"
import { ManageDesignsDesignsEdit, ManageDesignsDesignsList, ManageDesignsDesignsMenuBar } from "./components"

export function ManageDesignsDesigns(): JSX.Element {
  return (
    <ManagerDualPane 
      menuBar={<ManageDesignsDesignsMenuBar />}
      left={<ManageDesignsDesignsList />}
      right={<ManageDesignsDesignsEdit />}
    />
  )
}
