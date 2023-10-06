import { ManagerEdit } from "common"
import { ManageDesignsStripsName, ManageDesignsStripsButton, ManageDesignsStripsUsers } from "./components"

export function ManageDesignsStripsEdit(): JSX.Element {
  return (
    <ManagerEdit>
      <ManageDesignsStripsName />
      <ManageDesignsStripsButton />
      <ManageDesignsStripsUsers />
    </ManagerEdit>
  )
}
