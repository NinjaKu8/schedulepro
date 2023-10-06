import { ManagerEdit } from "common"
import { ManageCategoriesId, ManageCategoriesName } from "./components"

export function ManageCategoriesEdit(): JSX.Element {
  return (
    <ManagerEdit>
      <ManageCategoriesName />
      <ManageCategoriesId />
    </ManagerEdit>
  )
}
