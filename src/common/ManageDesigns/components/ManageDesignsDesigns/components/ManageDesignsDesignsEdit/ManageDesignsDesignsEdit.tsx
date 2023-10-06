import { ManagerEdit } from "common"
import { ManageDesignsDesignsName, ManageDesignsDesignsStrips, ManageDesignsDesignsPalette, ManageDesignsDesignsUsers } from "./components"

export function ManageDesignsDesignsEdit(): JSX.Element {
  return (
    <ManagerEdit>
      <ManageDesignsDesignsName />
      <ManageDesignsDesignsStrips />
      <ManageDesignsDesignsPalette />
      <ManageDesignsDesignsUsers />
    </ManagerEdit>
  )
}
